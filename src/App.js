import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import NewParty from './components/NewParty/NewParty';

class App extends React.Component {
    state = {
        loggedIn: false,
    }

    render() {
        return (
            <div className='App'>
                <NavBar />

                <Route 
                    exact path='/'
                    component={HomePage}
                />
                <Route 
                    path='/newparty'
                    component={NewParty}
                />
            </div>
        )
    }
}

export default App;
