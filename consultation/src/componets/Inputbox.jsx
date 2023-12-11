import React from "react";


function Inputbox(props){
    return(
        <div className={props.boxclass}>
            <span>{props.span}</span>
            <input type={props.type} name="" required="true" />
        </div>
    );
}

export default Inputbox;