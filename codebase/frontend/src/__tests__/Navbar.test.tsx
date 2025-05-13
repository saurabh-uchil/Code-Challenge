import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect } from "vitest";
import { Navbar } from "../Components/Navbar";
import { it } from "vitest";
import { MemoryRouter } from "react-router-dom";

describe('Testing Navbar', ()=>{
    beforeEach(()=>{
         render(<MemoryRouter initialEntries={['/']}>
                <Navbar />;
            </MemoryRouter>)
    });

    afterEach(()=>{
        cleanup();
    })

    it('testing Origin', ()=>{
        screen.debug();
        const origin = screen.getByText('Origin');
        expect(origin).toBeInTheDocument();
    });

    it('testing Home', ()=>{
        screen.debug();
        const home = screen.getByText('Home');
        expect(home).toBeInTheDocument();
    });

    it('testing Payment History', ()=>{
        screen.debug();
        const paymentHistory = screen.getByText('Payment History');
        expect(paymentHistory).toBeInTheDocument();
    });


})