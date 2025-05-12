import type { FunctionComponent, ReactElement } from "react";
import type { Payment } from "../Type/Types";
import '../CSS/PaymentCard.css';

type Props = {
    payment: Payment;
}

export const PaymentCard: FunctionComponent<Props> = (props:Props):ReactElement =>{
    const {id, amount, date} = props.payment;
    return (
        <div className="payementCard">
            <p>Account Id: {id}</p>
            <p>Amount: {amount}$</p>
            <p>Date: {date}</p>
        </div>)
} 