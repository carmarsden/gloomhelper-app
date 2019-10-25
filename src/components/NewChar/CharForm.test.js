import React from 'react';
import ReactDOM from 'react-dom';
import CharForm from './CharForm';

it('renders CharForm without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CharForm charType='brute' />, div);
    ReactDOM.unmountComponentAtNode(div);
});
