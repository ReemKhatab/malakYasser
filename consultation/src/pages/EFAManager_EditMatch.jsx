import React from "react";
import EditMatch from "../componets/EditMatch";
import EFAManagerNavBar from "../componets/EFAManagerNavBar";
import "../styles/EditMatches.css";

function EFAManager_EditMatch() {
  return (
    <div className="EditMatches">
      <EFAManagerNavBar />
      <EditMatch />
    </div>
  );
}

export default EFAManager_EditMatch;
