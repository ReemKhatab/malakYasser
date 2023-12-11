import React from "react";
import { ReactDOM } from "react";
import './SignUp.css'
import Button from "../componets/Button";
import Inputbox from "../componets/Inputbox";


function SignUp() {
    return (
        <div className="all">
            <div className="signupcontainer">
                <div className="signup">
                    <form>
                        <Inputbox span="Username" type="text" boxclass="signup-box"/>
                        <Inputbox span="Password" type="password" boxclass="signup-box"/>
                        <Inputbox span="First Name" type="text" boxclass="signup-box"/>
                        <Inputbox span="Last Name" type="text" boxclass="signup-box"/>
                        <Inputbox span="Birthdate" type="date" boxclass="signup-box"/>
                        <Inputbox span="National ID" type="number" boxclass="signup-box"/>
                        <Inputbox span="Address" type="text" boxclass="signup-box"/>
                        <Inputbox span="City" type="text" boxclass="signup-box"/>
                        <Inputbox span="Role" type="text" boxclass="signup-box"/>
                        <div className="signup-box">
                            <span>Gender</span>
                            <div className="radios">
                                <label for="male" style={{ color: "white" }}>Male</label>
                                <input type="radio" id="male" name="gender" value="male" />
                                <label for="female" style={{ color: "white" }}>Female</label>
                                <input type="radio" id="female" name="gender" value="female" />

                            </div>
                        </div>
                        <center>
                            <Button
                                text="SignUp"
                                class="normalbut"
                            />
                        </center>
                    </form>
                </div>
            </div>
        </div>

    );


}
export default SignUp;