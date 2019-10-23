import React from 'react';
import { NavLink } from 'react-router-dom';
import AccountContext from '../../AccountContext';
import './NavBar.css';

class NavBar extends React.Component {
    state = {
        navActive: false,
    }
    static contextType = AccountContext;

    toggleNav = () => {
        this.setState({
            navActive: !this.state.navActive
        })
    }

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
                    <div id='navbg'>
                        <NavLink exact to='/' id='homelink'>Home</NavLink>

                        <button id='navhamburger' aria-label='Display navigation' onClick={this.toggleNav}>
                            <span id='hamburger1' className={this.state.navActive ? 'active' : ''}></span>
                            <span id='hamburger2' className={this.state.navActive ? 'active' : ''}></span>
                            <span id='hamburger3' className={this.state.navActive ? 'active' : ''}></span>
                        </button>
                    </div>

                    <ul id='navlist' className={this.state.navActive ? 'active' : ''}>
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