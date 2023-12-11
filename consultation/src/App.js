import React from "react";
import "./App.css";
import Login from "./componets/login";
import Homepage from "./pages/homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./componets/Navbar";
import SiteAdministrator from "./pages/SiteAdministrator";
import EFAManager from "./pages/EFAManager";
import EFAManager_ViewMatches from "./pages/EFAManager_ViewMatches";
import EFAManager_EditMatch from "./pages/EFAManager_EditMatch";
import EFAManager_CreateNewMatch from "./pages/EFAManager_CreateNewMatch";
import EFAManager_AddStadium from "./pages/EFAManager_AddStadium";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="homepage" element={<Homepage />} />
          <Route path="/SiteAdministrator" element={<SiteAdministrator />} />
          <Route path="/EFA/View" element={<EFAManager_ViewMatches />} />
          <Route path="/EFA/Add" element={<EFAManager_AddStadium />} />
          <Route path="/EFA/Edit" element={<EFAManager_EditMatch />} />
          <Route path="/EFA/Create" element={<EFAManager_CreateNewMatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
