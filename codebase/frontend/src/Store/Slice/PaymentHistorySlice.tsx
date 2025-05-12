import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Payment } from "../../Type/Types";

const initialState: Payment[] = [];

const paymentHistorySlice = createSlice({
    name:'paymentHistory',
    initialState: initialState,
    reducers:{
        addPaymentHistory: ((state, action: PayloadAction<Payment>)=>{
            state.push(action.payload);
        })
    }
});

export const {addPaymentHistory} = paymentHistorySlice.actions;
export default paymentHistorySlice.reducer;