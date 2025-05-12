import type { FunctionComponent, ReactElement } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../Store/store";
import "../CSS/PaymentHistory.css";
import { PaymentCard } from "./PaymentCard";

type Props = {
    intro: string
}
export const PaymentHistory: FunctionComponent<Props> = (props:Props) : ReactElement =>{
    
    //Using Redux state to keep a track of payment history.
    const history = useSelector((state: RootState)=> state.paymentHistory);

    const paymentHistory = history.map((payment, i)=>{
        return <PaymentCard payment={payment} key={i} />
    })

    let records;
    if(history.length === 0){
        records = <div className="text-center prevRecord">There is no previous payment history</div>
    }else{
        records = <div className="paymentHistory">{paymentHistory}</div>
    }
    return(
        <div>
            <p className="intro">{props.intro}</p> 
            {records}
        </div>
    )
}