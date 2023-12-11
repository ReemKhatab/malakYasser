import React from 'react';
import './App.css';
import Login from './pages/login';
import Homepage from './pages/homepage'
import { BrowserRouter ,Route,Routes  } from 'react-router-dom';
import Navbar from './componets/Navbar';
import Welcomepage from './pages/welcomepage';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route index element={<Welcomepage/>}/>
        <Route path="homepage" element={<Homepage/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path='signup' element={<SignUp />} />
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
