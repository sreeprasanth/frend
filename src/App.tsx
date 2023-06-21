import "./App.css";
import { Link, Navigate, NavLink, Route, Routes } from "react-router-dom";

import Homepage from "./pages/home";
import HomeComponent from "./components/homecomponent";

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <HomeComponent />
      <Router>
        {/* <div>
          <NavLink to="/home">
            <span className="p-ripple main-nav-item">
              <i className="pi pi-home mr-2 text-blue-500"></i>
              <span className="font-medium">Dashboard</span>
            </span>
          </NavLink>
          <div className="surface-section flex-auto p-2  bg-blue-50">
            <Routes>
              <Route path="/home" element={<Homepage />} />
            </Routes>
          </div>
        </div> */}
      </Router>
    </div>
  );
}

export default App;
