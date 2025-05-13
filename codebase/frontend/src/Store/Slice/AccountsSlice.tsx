import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AccountDetails } from "../../Type/Types";

const initialState: AccountDetails[] = []
const accountSlice = createSlice({
    name: 'accounts',
    initialState: initialState,
    reducers: {
        setAccounts: (state, action:PayloadAction<AccountDetails[]>)=>{
            return action.payload;
        }
    }
});

export const {setAccounts} = accountSlice.actions;

export default accountSlice.reducer;