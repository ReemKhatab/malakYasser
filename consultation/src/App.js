import React from "react";
import "./App.css";
import Login from "./pages/Login";
import ReserveTicket from "./pages/ReserveTicket";
import Matches from "./pages/Matches";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteAdministrator from "./pages/SiteAdministrator";
import EFAManager_ViewMatches from "./pages/EFAManager_ViewMatches";
import EFAManager_EditMatch from "./pages/EFAManager_EditMatch";
import EFAManager_CreateNewMatch from "./pages/EFAManager_CreateNewMatch";
import EFAManager_AddStadium from "./pages/EFAManager_AddStadium";
import SignUp from "./pages/SignUp";
import Welcomepage from "./pages/Welcomepage";
import Edit from "./pages/Edituser";
import {configureStore} from "@reduxjs/toolkit"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Welcomepage />} />
          <Route path="/Matches" element={<Matches />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Edituser" element={<Edit />} />

          <Route path="/SiteAdministrator" element={<SiteAdministrator />} />

          <Route path="/EFA/View" element={<EFAManager_ViewMatches />} />
          <Route path="/EFA/Add" element={<EFAManager_AddStadium />} />
          <Route path="/EFA/Edit" element={<EFAManager_EditMatch />} />
          <Route path="/EFA/Create" element={<EFAManager_CreateNewMatch />} />

          <Route path="/Matches/ReserveTicket" element={<ReserveTicket />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
