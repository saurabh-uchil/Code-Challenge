import axios from "axios";
import {useEffect, useState, type FunctionComponent, type ReactElement } from "react";

import Modal from 'react-modal';
import type { AccountDetails } from "../Type/Types";
import { IoMdClose } from "react-icons/io";
import "../CSS/Modal.css";
import { useDispatch } from "react-redux";
import { addPaymentHistory } from "../Store/store";
import { format } from "date-fns";


Modal.setAppElement('#root');

type Props = {
    isOpen: boolean,
    toggleModal: () => void,
    account: AccountDetails
}
export const ModalElement : FunctionComponent<Props> = (props:Props): ReactElement =>{

    //Environment Variables
    const {VITE_PORT,VITE_PAYMENTS_URL} = import.meta.env;

    //Local State
    const [formData, setFormData] = useState({amount: 0, cardNumber: '', expiry:'', cvv: ''});
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        if (props.isOpen) {
          setPaymentSuccess(false);
          setPaymentStatus('');
          setFormData({ amount: 0, cardNumber: '', expiry: '', cvv: '' });
        }
      }, [props.isOpen]);
    
    //Clicking on Payment
    const handlePayment = async () =>{
        try{
            const paymentURL = "http://localhost:"+VITE_PORT+VITE_PAYMENTS_URL;
            const payload = {...formData}
            const response = await axios.post(paymentURL, payload);       
            
            if(response.status === 200){
                //Store data to redux store
                dispatch(addPaymentHistory({id: props.account.id, amount: payload.amount, date: format(new Date(), 'dd/MM/yy')}))
                
                //Set Status
                setPaymentSuccess(true);
                setPaymentStatus(response.data.message);

                //Clear Form Data
                setFormData({amount: 0, cardNumber: '', expiry:'', cvv: ''});
            }
        }
        catch(err){

            //Catch Errors
            let message; 
            if (axios.isAxiosError(err)) {
                message = err.response?.data?.message || err.message;
            } 
            else {
                message = err;
            }
            setPaymentSuccess(false);
            setPaymentStatus(message);
        }
    }

    //Setting Form Data on change of value
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setFormData({...formData, [e.target.id]:e.target.value});
    }

    let paymentMessage;
    
    //Payment Status Message
    if(paymentSuccess){
        paymentMessage = <p className="text-success text-center message">{paymentStatus}</p>
    }
    else{
        if(paymentStatus !==''){
            paymentMessage = <p className="text-danger text-center message">{paymentStatus}</p>
        }
    }
    return(
        <>
        <Modal isOpen={props.isOpen} onRequestClose={props.toggleModal} className="my-modal" overlayClassName="my-overlay">     
                <div className="ModalHeader">
                    <h3>Make a payment</h3>
                    <IoMdClose className="icon" onClick={props.toggleModal}/>
                </div>
                
                <p>Id: {props.account.id}</p>
                <p>Balance Amount: {props.account.dueAmount}</p>
                <label htmlFor="amount">How much would you like to pay?</label>
                <input type="text" name="amount" id="amount" value={formData.amount} onChange={handleChange}/>
                
                <div className="cardDetails">
                    <label htmlFor="method">How would you like to pay?</label>
                    <input type="text" name="method" placeholder="Card Number" id="cardNumber" value={formData.cardNumber} onChange={handleChange}/>
                    <div className="cardExpiry">
                        <input type="text" placeholder="Expiry" id="expiry" value={formData.expiry} onChange={handleChange}/>
                        <input type="password" placeholder="CVV" id="cvv" value={formData.cvv} onChange={handleChange}/>
                    </div>
                </div>
                
                <div className="pay">
                    <button onClick={handlePayment} className="btn btn-danger">Pay</button>
                </div>
                
                {paymentMessage}

            </Modal>
        </>
    )
} 