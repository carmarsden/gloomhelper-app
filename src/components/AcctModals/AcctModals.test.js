import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CreateAccount from './CreateAccount';
import Login from './Login';

it('renders CreateAccount without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <CreateAccount />
        </BrowserRouter>, 
    div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders Login without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>, 
    div);
    ReactDOM.unmountComponentAtNode(div);
});
