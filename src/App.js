import React from 'react';
import { Route } from 'react-router-dom';
import ReactModal from 'react-modal';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Login from './components/AcctModals/Login';
import CreateAccount from './components/AcctModals/CreateAccount';
import HomePage from './components/HomePage/HomePage';
import NewParty from './components/NewParty/NewParty';
import NewChar from './components/NewChar/NewChar';
import Dashboard from './components/Dashboard/Dashboard';

ReactModal.setAppElement('#root');

class App extends React.Component {
    state = {
        loggedIn: false,
        showLoginModal: false,
        showCreateAcctModal: false,
    }

    handleOpenModal = (screen) => {
        if (screen === 'login') {
            this.setState({
                showLoginModal: true,
                showCreateAcctModal: false,
            })
        }
        if (screen === 'createacct') {
            this.setState({
                showLoginModal: false,
                showCreateAcctModal: true,
            })
        }
    }

    handleCloseModal = e => {
        this.setState({
            showLoginModal: false,
            showCreateAcctModal: false,
        })
    }

    handleCreateAccount = e => {
        e.preventDefault();
        window.alert("You've created your account!");
        this.setState({
            loggedIn: true,
            showCreateAcctModal: false,
        })
    }

    handleLogin = e => {
        e.preventDefault();
        window.alert("You've logged in!");
        this.setState({
            loggedIn: true,
            showLoginModal: false,
            showCreateAcctModal: false
        })
    }

    handleLogout = e => {
        this.setState({
            loggedIn: false
        })
    }

    render() {
        return (
            <div className='App'>
                <NavBar 
                    handleOpenModal={this.handleOpenModal}
                    handleLogout={this.handleLogout}
                    loggedIn={this.state.loggedIn}
                />

                <ReactModal 
                    isOpen={this.state.showLoginModal} 
                    contentLabel='Login modal'
                    onRequestClose={this.handleCloseModal}
                    ariaHideApp={true}
                    className='account-modal'
                >
                    <Login 
                        handleLogin={this.handleLogin}
                        handleOpenModal={this.handleOpenModal}
                        handleCloseModal={this.handleCloseModal} 
                    />
                </ReactModal>

                <ReactModal 
                    isOpen={this.state.showCreateAcctModal} 
                    contentLabel='Create Account modal'
                    onRequestClose={this.handleCloseModal}
                    ariaHideApp={true}
                    className='account-modal'
                >
                    <CreateAccount 
                        handleCreateAccount={this.handleCreateAccount}
                        handleOpenModal={this.handleOpenModal}
                        handleCloseModal={this.handleCloseModal} 
                    />
                </ReactModal>

                <Route 
                    exact path='/'
                    component={HomePage}
                />
                <Route 
                    path='/dashboard'
                    component={Dashboard}
                />
                <Route 
                    path='/newparty'
                    component={NewParty}
                />
                <Route 
                    path='/newchar'
                    component={NewChar}
                />

                <Footer />
            </div>
        )
    }
}

export default App;
