import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets';
import Navbar from './components/Navbar';
import './App.css';

const App = () => (
  <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Rockets />} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/Missions" element={<Missions />} />
      </Routes>
    </Router>
  </div>
);

export default App;
