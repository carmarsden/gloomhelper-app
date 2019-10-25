import React from 'react';
import ReactDOM from 'react-dom';
import DEMODATA from '../../data/demodata';
import RenderChar from './RenderChar';

const exampleChar = DEMODATA[1][0];

it('renders RenderChar without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <RenderChar>
            {exampleChar}
        </RenderChar>, 
    div);
    ReactDOM.unmountComponentAtNode(div);
});