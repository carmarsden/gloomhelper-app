import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

class NavBar extends React.Component {
    render() {
        return (
            <header role="banner">
                <nav role="navigation">
                    <ul className="navlist">
                        <li>Gloomhelper Logo</li>
                        <li>Other</li>
                        <li>Nav Bar</li>
                        <li>Options</li>
                    </ul>
                </nav>
          </header>
      
        )
    }
}

export default NavBar;