import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Personal from "./components/Personal";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Friends from "./components/Friends";
import Groups from "./components/Groups";
import LoginPage from "./components/LoginPage";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/groups" element={<Groups />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;