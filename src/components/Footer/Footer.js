import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer role='contentinfo'>
            <p>
                <a href='https://boardgamegeek.com/thread/1733586/files-creation' target='_blank' rel='noopener noreferrer'>All Gloomhaven image assets</a> by <a href='https://www.cephalofair.com/isaac' target='_blank' rel='noopener noreferrer'>Isaac Childress</a> are licensed under <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/' target='_blank' rel='noopener noreferrer'>CC BY-NC-SA 4.0</a>.
            </p>
            <p>
                Created by Caroline Marsden{'  '}
                <a href='https://github.com/carmarsden' target='_blank' rel='noopener noreferrer'>GitHub</a>
            </p>
        </footer>
    );    
}

export default Footer;