import { configureStore } from "@reduxjs/toolkit";
import paymentHistoryReducer from './Slice/PaymentHistorySlice';
import accountsReducer from "./Slice/AccountsSlice";
import { addPaymentHistory } from "./Slice/PaymentHistorySlice";
import { setAccounts } from "./Slice/AccountsSlice";

const store = configureStore({
    reducer:{
        paymentHistory: paymentHistoryReducer,
        accounts: accountsReducer
    }
});

export {store, addPaymentHistory, setAccounts}
export type RootState = ReturnType<typeof store.getState>;