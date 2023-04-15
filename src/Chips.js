import React from "react";
import {withRouter, NavLink} from "react-router-dom"
import "./Chips.css"

const Chips = () => {
    return(
        <div className="Chips">
            <h1>Chips</h1>
            <h3>SO MUCH SALT</h3>
            <nav className="Chips-back">
            <NavLink exact to ='/'>
                Go Back
            </NavLink>
            </nav>
        </div>
    )
}

export default withRouter(Chips);