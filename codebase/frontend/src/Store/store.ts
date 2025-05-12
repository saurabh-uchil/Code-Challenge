import { configureStore } from "@reduxjs/toolkit";
import paymentHistoryReducer from './Slice/PaymentHistorySlice';

const store = configureStore({
    reducer:{
        paymentHistory: paymentHistoryReducer
    }
});

export {store}
export type RootState = ReturnType<typeof store.getState>;