import React from "react";
import ViewMatches from "../componets/ViewMatches";
import EFAManagerNavBar from "../componets/EFAManagerNavBar";
import "../styles/ViewMatches.css"

function EFAManager_ViewMatches() {
  return (
    <div className="ViewMatches">
      <EFAManagerNavBar />
      <h2>Current matches</h2>
      <ViewMatches />
    </div>
  );
}

export default EFAManager_ViewMatches;
