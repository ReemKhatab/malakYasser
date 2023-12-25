import React from "react";
import NavBar from "../componets/Navbar";
import CustomerViewMatches from "../componets/CustomerViewMatches";
function Customer_ViewMatches() {
  // const handleButtonClick = () => {
  //   // Add your button click logic here
  //   console.log("Button clicked!");
  // };
  return (
    <div className="ManagerViewMatches">
      <NavBar />
      <h2>Current matches</h2>
      <CustomerViewMatches />
    </div>
  );
}
export default Customer_ViewMatches;
