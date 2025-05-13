import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { Account } from "../Components/AccountCard";
import { Provider } from "react-redux";
import { store } from "../Store/store";

describe('Testing Account History', ()=>{
    beforeEach(()=>{
        render(
        <Provider store={store}>
            <Account account={{id:'A-1005',address:'44 Parker St, SA-2154', type:"GAS", dueAmount:50}}/>
        </Provider>
        );
    })

    afterEach(()=>{
        cleanup();
    })

    it('testing id', ()=>{
        const id = screen.getByText('A-1005');
        expect(id).toBeInTheDocument();
    });

    it('testing address', ()=>{
        const address = screen.getByText('44 Parker St, SA-2154');
        expect(address).toBeInTheDocument();
    });

    it('testing type', ()=>{
        const type = screen.getByText('GAS');
        expect(type).toBeInTheDocument();
    });

    it('testing balance', ()=>{
        screen.debug();
        const balance = screen.getByText((text)=> text.includes('50$'));
        expect(balance).toBeInTheDocument();
    });
})