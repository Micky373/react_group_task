import React from 'react';
import { NavLink } from 'react-router-dom';
import Img from '../images/space_travelers.png';

const Navbar = () => (
  <nav>
    <div className="nav_container">
      <div className="image_container">
        <img alt="header logo" src={`${Img}`} />
        <h1>Space Travlers&apos; Hub</h1>
      </div>
      <ul className="nav_links">
        <NavLink activeClassName="active" to="/"><li className="page_links">Rockets</li></NavLink>
        <NavLink activeClassName="active" to="/Missions"><li className="page_links">Missions</li></NavLink>
        <div className="line_end" />
        <NavLink activeClassName="active" to="/MyProfile"><li className="page_links">My profile</li></NavLink>
      </ul>
    </div>
    <div className="nav_end" />
  </nav>
);

export default Navbar;
