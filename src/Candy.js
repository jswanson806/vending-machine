import React from "react";
import {withRouter, NavLink} from "react-router-dom"
import "./Candy.css"

const Candy = () => {
    return(
        <div className="Candy">
            <h1>Candy</h1>
            <h3>SO...DELICIOUS</h3>
            <nav className="Candy-back">
                <NavLink exact to ='/'>
                    Go Back
                </NavLink>
            </nav>
        </div>
    )
}

export default withRouter(Candy);