import React from "react";
import "../styles/Button.css";
function Button(props) {
  return <button className={props.class}>{props.text}</button>;
}
export default Button;
