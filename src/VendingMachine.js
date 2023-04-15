import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import './VendingMachine.css';


const VendingMachine = () => {
    return (
        <>
            <div className="VendingMachine">
                    <h2>Hi, I am a vending machine!</h2>
                    <h2>Select your snack.</h2>
            </div>
            <div className="VendingMachine-selection">
                {/* NavLinks */}
                <nav className="VendingMachine-nav-links">
                    <NavLink exact to ='/soda'>
                        Soda
                    </NavLink>
                    <NavLink exact to ='/chips'>
                        Chips
                    </NavLink>
                    <NavLink exact to ='/candy'>
                        Candy
                    </NavLink>
                </nav>
            </div>
        </>
    )
}

export default withRouter(VendingMachine);