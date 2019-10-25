import React from 'react';
import ReactDOM from 'react-dom';
import DEMODATA from '../../data/demodata';
import RenderParty from './RenderParty';

const exampleParty = DEMODATA[0][0];

it('renders RenderParty without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <RenderParty>
            {exampleParty}
        </RenderParty>, 
    div);
    ReactDOM.unmountComponentAtNode(div);
});