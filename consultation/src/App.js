import React from "react";
import "./App.css";
import Login from "./pages/login";
import Homepage from "./pages/homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./componets/Navbar";
import SiteAdministrator from "./pages/SiteAdministrator";
import EFAManager from "./pages/EFAManager";
import EFAManager_ViewMatches from "./pages/EFAManager_ViewMatches";
import EFAManager_EditMatch from "./pages/EFAManager_EditMatch";
import EFAManager_CreateNewMatch from "./pages/EFAManager_CreateNewMatch";
import EFAManager_AddStadium from "./pages/EFAManager_AddStadium";
import Welcomepage from './pages/welcomepage';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Welcomepage />} />
          <Route path="homepage" element={<Homepage />} />
          <Route path="/SiteAdministrator" element={<SiteAdministrator />} />
          <Route path="/EFA/View" element={<EFAManager_ViewMatches />} />
          <Route path="/EFA/Add" element={<EFAManager_AddStadium />} />
          <Route path="/EFA/Edit" element={<EFAManager_EditMatch />} />
          <Route path="/EFA/Create" element={<EFAManager_CreateNewMatch />} />
          <Route path="login" element={<Login/>}/>
        <Route path='signup' element={<SignUp />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
