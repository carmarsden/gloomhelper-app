import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';

class App extends React.Component {
    state = {
        loggedIn: false,
    }

    render() {
        return (
            <div className='App'>
                <NavBar />
                <main className="App-header">
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Learn React</a>
                </main>                
            </div>
        )
    }
}

export default App;
