import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { describe } from "vitest";
import { PaymentHistory } from "../Components/PaymentHistory";
import { Provider } from "react-redux";
import { store } from "../Store/store";

describe(('Testing Payment History'), ()=>{
    
    it('Testing intro', ()=>{
        render(
            <Provider store={store}>
                <PaymentHistory intro="This is the payment history page"/>
            </Provider>
        );

        const intro = screen.getByText('This is the payment history page');

        expect(intro).toBeInTheDocument();
    })
})