import React from "react";
import { ReactDOM } from "react";
import './login.css'
function Login() {
    return (
        <div>
            
 

            <body>


                <div class="login-box">

                    <form>
                        <div class="user-box">
                            <input type="text" name="" required=""/>
                                <label>Username</label>
                        </div>
                        <div class="user-box">
                            <input type="password" name="" required=""/>
                                <label>Password</label>
                        </div><center>
                            <a href="#">
                                SEND
                                <span></span>
                            </a></center>
                    </form>
                </div>
            </body>

        </div>

            );


}
export default Login;