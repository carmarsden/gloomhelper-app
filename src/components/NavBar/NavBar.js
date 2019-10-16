import React from 'react';
import { NavLink } from 'react-router-dom';
import AccountContext from '../../AccountContext';
import './NavBar.css';

class NavBar extends React.Component {
    static contextType = AccountContext;

    generateAccountLinks() {
        if (this.context.loggedIn) {
            return (
                <li><NavLink to='/logout' onClick={this.props.handleLogout}>Log Out</NavLink></li>
            )
        } else {
            return (
                <>
                    <li><NavLink to='#' onClick={() => this.props.handleOpenModal('login')}>Login</NavLink></li>
                    <li><NavLink to='#' onClick={() => this.props.handleOpenModal('createacct')}>Create Account</NavLink></li>
                </>
            )
        }
    }

    render() {
        const dashboardLink = (this.context.loggedIn) ? <li><NavLink to='/dashboard'>Dashboard</NavLink></li> : <li><NavLink to='/demo'>Demo</NavLink></li>;
        const accountLinks = this.generateAccountLinks();

        return (
            <header role="banner">
                <nav role="navigation">
                    <ul className="navlist">
                        <li><NavLink exact to='/'>Gloomhelper Logo</NavLink></li>
                        {dashboardLink}
                        <li><NavLink to='/newparty'>+ Party</NavLink></li>
                        <li><NavLink to='/newchar'>+ Char</NavLink></li>
                        {accountLinks}
                    </ul>
                </nav>
          </header>
      
        )
    }
}

export default NavBar;