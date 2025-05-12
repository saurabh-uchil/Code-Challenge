import type { FunctionComponent, ReactElement } from "react"
import { NavLink } from "react-router-dom"
import "../CSS/Navbar.css";

export const Navbar: FunctionComponent = ():ReactElement =>{
    return(
        <>
       {/*  <nav>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/paymentHistory"}>Payment History</NavLink>
        </nav> */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-success custom-navbar">
            <h4 className="navbar-brand" >Origin</h4>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link "to={"/"}>Home <span className="sr-only"></span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/paymentHistory"}>Payment History</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </>
        
    )
}