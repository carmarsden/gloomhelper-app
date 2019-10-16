import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import ReactModal from 'react-modal';
import './App.css';
import AccountContext from './AccountContext';

// Components
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Login from './components/AcctModals/Login';
import CreateAccount from './components/AcctModals/CreateAccount';
import HomePage from './components/HomePage/HomePage';
import NewParty from './components/NewParty/NewParty';
import NewChar from './components/NewChar/NewChar';
import Demo from './components/Demo/Demo';
import Dashboard from './components/Dashboard/Dashboard';

// Services
import AccountService from './services/account-service';
import TokenService from './services/token-service';


class App extends React.Component {
    state = {
        loggedIn: TokenService.hasAuthToken(),
        showLoginModal: false,
        showCreateAcctModal: false,
        messages: {
            loginError: null,
            registerError: null,
            modalMessage: null,
        }
    }

    handleOpenModal = (screen, message) => {
        if (screen === 'login') {
            this.setState({
                showLoginModal: true,
                showCreateAcctModal: false,
                messages: {
                    ...this.state.messages,
                    modalMessage: message
                }
            })
        }
        if (screen === 'createacct') {
            this.setState({
                showLoginModal: false,
                showCreateAcctModal: true,
                messages: {
                    ...this.state.messages,
                    modalMessage: message
                }
            })
        }
    }

    handleCloseModal = e => {
        // clear modals & errors
        this.setState({
            showLoginModal: false,
            showCreateAcctModal: false,
            messages: {
                loginError: null,
                registerError: null,
                modalMessage: null,
            }
        })
    }

    promptLogin = () => {
        this.handleOpenModal('createacct', 'To save your work for the future, please create an account or log in!');
    }

    handleCreateAccount = e => {
        e.preventDefault();

        const { username, password } = e.target;
        const user = {
            username: username.value,
            password: password.value,
        };

        AccountService.register(user)
            .then(res => {
                AccountService.login(user)
                    .then(res => {
                        TokenService.saveAuthToken(res.authToken)
                        this.setState({
                            loggedIn: true,
                            showLoginModal: false,
                            showCreateAcctModal: false,
                            messages: {
                                loginError: null,
                                registerError: null,
                                modalMessage: null,
                            },
                        })
                    })
                    .catch(res => {
                        const errorText = res.error ? res.error : 'Something went wrong! Please try again later.';
                        this.setState({
                            messages: {
                                ...this.state.messages,
                                registerError: errorText
                            }
                        });        
                    })
            })
            .catch(res => {
                const errorText = res.error ? res.error : 'Something went wrong! Please try again later.';
                this.setState({
                    messages: {
                        ...this.state.messages,
                        registerError: errorText
                    }
                });
            })
        ;
    }

    handleLogin = e => {
        e.preventDefault();
        const { username, password } = e.target;
        const credentials = {
            username: username.value,
            password: password.value,
        };

        AccountService.login(credentials)
            .then(res => {
                TokenService.saveAuthToken(res.authToken);
                this.setState({
                    loggedIn: true,
                    showLoginModal: false,
                    showCreateAcctModal: false,
                    messages: {
                        loginError: null,
                        registerError: null,
                        modalMessage: null,
                    },          
                })
            })
            .catch(res => {
                const errorText = res.error ? res.error : 'Something went wrong! Please try again later.';
                this.setState({
                    messages: {
                        ...this.state.messages,
                        loginError: errorText
                    }
                });
            })
        ;
    }

    handleLogout = e => {
        TokenService.clearAuthToken();
        this.setState({
            loggedIn: false
        });
    }

    render() {
        const contextValue = {
            loggedIn: this.state.loggedIn,
            promptLogin: this.promptLogin,
        };

        return (
            <div className='App'>
                <AccountContext.Provider value={contextValue}>
                    <NavBar 
                        handleOpenModal={this.handleOpenModal}
                        handleLogout={this.handleLogout}
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
                            loginError={this.state.messages.loginError}
                            modalMessage={this.state.messages.modalMessage}
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
                            registerError={this.state.messages.registerError}
                            modalMessage={this.state.messages.modalMessage}
                        />
                    </ReactModal>

                    <Route 
                        exact path='/'
                        component={HomePage}
                    />
                    <Route 
                        path='/dashboard'
                        render={() => this.state.loggedIn ? <Dashboard /> : <Redirect to='/demo' />}
                    />
                    <Route 
                        path='/demo'
                        component={Demo}
                    />
                    <Route 
                        path='/newparty'
                        component={NewParty}
                    />
                    <Route 
                        path='/newchar'
                        component={NewChar}
                    />
                    <Route 
                        path='/logout'
                        render={() => <Redirect to='/' />}
                    />
                </AccountContext.Provider>
                <Footer />
            </div>
        )
    }
}

export default App;
