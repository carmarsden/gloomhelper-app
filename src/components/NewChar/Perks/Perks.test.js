import React from 'react';
import ReactDOM from 'react-dom';
import BrutePerks from './BrutePerks';
import CragheartPerks from './CragheartPerks';
import MindthiefPerks from './MindthiefPerks';
import ScoundrelPerks from './ScoundrelPerks';
import SpellweaverPerks from './SpellweaverPerks';
import TinkererPerks from './TinkererPerks';

it('renders BrutePerks without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrutePerks />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders CragheartPerks without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CragheartPerks />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders MindthiefPerks without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MindthiefPerks />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders ScoundrelPerks without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ScoundrelPerks />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders SpellweaverPerks without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SpellweaverPerks />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders TinkererPerks without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TinkererPerks />, div);
    ReactDOM.unmountComponentAtNode(div);
});
