import React from "react";
import CreateNewMatch from "../componets/CreateNewMatch";
import EFAManagerNavBar from "../componets/EFAManagerNavBar";
import "../styles/CreateMatches.css"
function EFAManager_CreateNewMatch() {
  return (
    <div className="background">
      <EFAManagerNavBar />
      <CreateNewMatch />
    </div>
  );
}

export default EFAManager_CreateNewMatch;
