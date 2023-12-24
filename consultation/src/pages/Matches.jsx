import React from "react";
import NavBar from "../componets/Navbar";
import ViewMatches from "../componets/ViewMatches";
function Matches() {
  const handleButtonClick = () => {
    // Add your button click logic here
    console.log("Button clicked!");
  };
  return (
    <div className="ViewMatches">
      <NavBar />
      <h2>Current matches</h2>
      <ViewMatches showButton={true} onButtonClick={handleButtonClick} />
    </div>
  );
}
export default Matches;
