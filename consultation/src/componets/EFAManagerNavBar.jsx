import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/EFAManagerNavBar.css";

function EFAManagerNavBar() {
  const [openLinks, setopenLinks] = useState(false);
  const toggleNavbar = () => {
    setopenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <div className="hiddenLinks">
          <Link to="/EFA/View">View Matches</Link>
          <Link to="/EFA/Edit">Edit Matches</Link>
          <Link to="/EFA/Add">Add Stadium</Link>
          <Link to="/EFA/Create">Create Match</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/EFA/View">View Matches</Link>
        <Link to="/EFA/Edit">Edit Matches</Link>
        <Link to="/EFA/Add">Add Stadium</Link>
        <Link to="/EFA/Create">Create Match</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default EFAManagerNavBar;
