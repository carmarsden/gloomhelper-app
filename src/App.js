import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import NewParty from './components/NewParty/NewParty';
import Footer from './components/Footer/Footer';
import NewChar from './components/NewChar/NewChar';

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
