import React from 'react';
import ReactDOM from 'react-dom';
import Collapsible from './Collapsible';

it('renders Collapsible without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Collapsible title='Test title'>
            Test data to be rendered
        </Collapsible>, 
    div);
    ReactDOM.unmountComponentAtNode(div);
});