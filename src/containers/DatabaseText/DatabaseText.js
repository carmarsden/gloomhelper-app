import React from 'react';
import './DatabaseText.css';

function DatabaseText(props) {
    const regex = /\n/;

    return (
        props.children.split(regex).map((item, i) => <span className='db-text' key={i}>{item}</span>)
    )
}

export default DatabaseText;