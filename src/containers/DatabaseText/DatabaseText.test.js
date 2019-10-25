import React from 'react';
import ReactDOM from 'react-dom';
import DatabaseText from './DatabaseText';

it('renders DatabaseText without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <DatabaseText>
            Test text to be rendered
        </DatabaseText>, 
    div);
    ReactDOM.unmountComponentAtNode(div);
});