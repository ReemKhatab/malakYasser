import React from "react";
import { ReactDOM } from "react";
import "./Navbar.css";
import uefa from "../images/download.jpeg";
function Navbar() {

    return (
        <nav class="navbar">

            <div class="nav">
             
                <a href="/"><img src={uefa} class="brand-logo" alt="" /></a>
                <ul>
                    <li><a class="active" href="/">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="#about">About</a></li>
                </ul>


            </div>




        </nav>







    );
}
export default Navbar;
