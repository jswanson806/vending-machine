import React from "react";
import {withRouter, NavLink} from "react-router-dom";
import "./Soda.css"

const Soda = () => {
    console.log("Soda component rendered");
    return(
        <div className="Soda">
            <h1>Soda</h1>
            <h3>SO MUCH SUGAR</h3>
            <nav className="Soda-back">
                <NavLink exact to ='/'>
                    Go Back
                </NavLink>
            </nav>
        </div>
    )
}

export default withRouter(Soda);