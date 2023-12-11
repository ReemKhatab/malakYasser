import React from 'react';
import './App.css';
import Login from './componets/login';
import Homepage from './pages/homepage'
import { BrowserRouter ,Route,Routes  } from 'react-router-dom';
import Navbar from './componets/Navbar';
import SiteAdministrator from './pages/SiteAdministrator';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path="homepage" element={<Homepage/>}/>
        <Route path='/SiteAdministrator' element={<SiteAdministrator/>} />
      </Routes>
      </BrowserRouter>
      
  




      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hello worldd</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
