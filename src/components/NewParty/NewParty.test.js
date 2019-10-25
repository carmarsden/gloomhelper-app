import React from 'react';
import ReactDOM from 'react-dom';
import NewParty from './NewParty';

it('renders NewParty without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewParty />, div);
    ReactDOM.unmountComponentAtNode(div);
});