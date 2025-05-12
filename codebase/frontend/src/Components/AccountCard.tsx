import { useState, type FunctionComponent, type ReactElement } from "react";
import { ModalElement } from "./Modal";
import type { AccountDetails } from "../Type/Account";
import "../CSS/Accounts.css";
import icon from "../assets/icon.png";

type Props  = {
  account: AccountDetails
}

export const Account:FunctionComponent<Props> =  (props:Props) : ReactElement =>{
    const {id, type, address, dueAmount} = props.account;
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const toggleModal = ()=>{
        setModalIsOpen(modalIsOpen => !modalIsOpen)
    }
    
    let amount;
    if(dueAmount > 0){
        amount = <p> Account Balance: <span className="text-success" >{dueAmount}$</span></p>
    }else if(dueAmount == 0){
        amount = <p> Account Balance: <span className="text-dark" >{dueAmount}$</span></p>
    }else{
        amount = <p> Account Balance: <span className="text-danger" >{dueAmount}$</span></p>
    }
    
    return (
        <div className="accountsCard">
            <div className="imgDiv">
                <img src={icon} alt="logo" />
            </div>
            <div className="details">
                <p>{type}</p>
                <p>{id}</p>
                <p>{address}</p>
                {amount}
                <div className="button">
                <button className="btn btn-danger" onClick={toggleModal}>Make Payment</button>
                </div>
            </div>

            <ModalElement toggleModal={toggleModal} isOpen={modalIsOpen} account={props.account}/>
            
        </div>
        
        
    )
}