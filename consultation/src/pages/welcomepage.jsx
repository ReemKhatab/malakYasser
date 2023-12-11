import React from "react";
import ReactDOM from 'react-dom/client';
import './welcomepage.css'
import stadium from '../images/stadium.jpg'
import { Link } from "react-router-dom";
import Button from "../componets/Button";

function Welcomepage() {
    return (

        <div className="welcome" style={{ backgroundImage: `url(${stadium})` }} >
            <div className="buttons">
            <Link to='login'>
                <Button 
                    text="Login"
                    class="welcomebut"
                />
            </Link>
            <Link to='homepage'>
                <Button 
                    text="View Matches"
                    class="welcomebut"
                />
            </Link>
            <Link to="signup">
                <Button 
                    text="SignUp"
                    class="welcomebut"
                />
            </Link>
            </div>
        </div>


    )
}
export default Welcomepage;