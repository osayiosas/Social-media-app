import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import './App.css';
import { Main } from "./pages/Main";
import { Login } from "./pages/Login"
import {Navbar} from "./components/navbar"


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path='/Login' element={<Login />}  />
        </Routes>
      </Router>
    </div>
  );
}

export default App;