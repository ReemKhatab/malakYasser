import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/ManagerNavbar.css";

function ManagerNavbar() {
  const [openLinks, setopenLinks] = useState(false);
  const toggleNavbar = () => {
    setopenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Sign Out</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Sign Out</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default ManagerNavbar;
