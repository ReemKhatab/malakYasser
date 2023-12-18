import React from "react";
import AddStadium from "../componets/AddStadium";
import EFAManagerNavBar from "../componets/EFAManagerNavBar";
import '../styles/AddStadium.css'
function EFAManager_AddStadium() {
  return (
    <div className="background">
      <EFAManagerNavBar />
      <AddStadium />
    </div>
  );
}

export default EFAManager_AddStadium;
