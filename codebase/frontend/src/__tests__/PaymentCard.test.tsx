import {  afterEach, beforeEach, describe, expect, it } from "vitest";

import {cleanup, render, screen} from "@testing-library/react";

import { PaymentCard } from "../Components/PaymentCard";


describe('testing PaymentCard', ()=>{

    beforeEach(()=>{
        render(<PaymentCard payment={{ id: "A-1003", amount: 20, date: "13/05/2025" }} />);
    });

    afterEach(() => {
    cleanup(); 
    });
    
    it('Correctly rendering the account Id', ()=>{    
        screen.debug();
        const accountId = screen.getByText((text) => text.includes('Account Id: A-1003'));
        expect(accountId).toBeInTheDocument();
    });
    
    it('Correctly rendering the amount', ()=>{
        screen.debug();
        const amount = screen.getByText((text)=> text.includes('Amount: 20$'));
        expect(amount).toBeInTheDocument();
    });
    
    it('Correctly rendering the date', ()=>{
        screen.debug();
        const date = screen.getByText((text)=> text.includes('Date: 13/05/2025'));
        expect(date).toBeInTheDocument();
    });
});
