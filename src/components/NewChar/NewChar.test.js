import React from 'react';
import ReactDOM from 'react-dom';
import NewChar from './NewChar';

it('renders NewChar without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewChar />, div);
    ReactDOM.unmountComponentAtNode(div);
});
