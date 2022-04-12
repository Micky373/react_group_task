import React from 'react';
import { Link } from 'react-router-dom';
import Img from '../images/space_travelers.png';

const Navbar = () => (
  <nav>
    <div className="nav_container">
      <div className="image_container">
        <img alt="header logo" src={`${Img}`} />
        <h1>Check Travlers&apos; Hub</h1>
      </div>
      <ul className="nav_links">
        <Link to="/"><li className="page_links">Rockets</li></Link>
        <Link to="/Missions"><li className="page_links">Missions</li></Link>
        <div className="line_end" />
        <Link to="/MyProfile"><li className="page_links">My profile</li></Link>
      </ul>
    </div>
    <div className="nav_end" />
  </nav>
);

export default Navbar;
