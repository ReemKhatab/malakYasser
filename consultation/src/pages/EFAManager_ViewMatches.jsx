import React from "react";
import ViewMatches from "../componets/ViewMatches";
import EFAManagerNavBar from "../componets/EFAManagerNavBar";
function EFAManager_ViewMatches() {
  return (
    <div>
      <EFAManagerNavBar />
      <h1 style={{ textAlign: "left" }} class="ml-3">Current matches</h1>
      <ViewMatches />
    </div>
  );
}

export default EFAManager_ViewMatches;
