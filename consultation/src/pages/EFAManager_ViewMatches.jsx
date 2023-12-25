import React from "react";
import ManagerViewMatches from "../componets/ManagerViewMatches";
import EFAManagerNavBar from "../componets/EFAManagerNavBar";
import "../styles/ManagerViewMatches.css";

function EFAManager_ViewMatches() {
  return (
    <div className="ManagerViewMatches">
      <EFAManagerNavBar />
      <h2>Current matches</h2>
      <ManagerViewMatches />
    </div>
  );
}

export default EFAManager_ViewMatches;
