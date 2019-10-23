import React from 'react';
import { Link } from 'react-router-dom';
import AccountContext from '../../AccountContext';
import images from '../../images/images';
import './HomePage.css'

function HomePage() {
    const context = React.useContext(AccountContext);

    return (
        <main role='main'>
            <header className='home-header'>
                <img src={images.logo} alt='Gloomhelper' id='home-logo' />
            </header>
            <section className='bodysection'>
                <h1>Table space is precious...</h1>
                <p className='home-content'>... so put away the paper! <strong>Gloomhelper</strong> is a companion web app to the board game <a href="https://boardgamegeek.com/boardgame/174430/gloomhaven" target="_blank" rel="noopener noreferrer">Gloomhaven</a>. Rather than tracking all characters and party stats on pieces of paper--and killing your erasers in the effort--create an account here to track and view stats between plays, on one handy screen.</p>
            </section>
            <section className='bodysection'>
                <h2>How It Works</h2>
                <ol className='home-content'>
                    <li>Get your party started with a new party sheet</li>
                    <li>Create an account to start saving your data</li>
                    <li>Create character sheets for each player character</li>
                    <li>Focus on killing those monsters!</li>
                </ol>
            </section>
            <section className='bodysection' id='tryitout'>
                <h2>Ready to try it out?</h2>
                <p>
                    Jump right in by creating a new party--just remember to create your account to save it!
                </p>
                <Link to='/newparty' className='home-button'>Get Started</Link>
                <p>Or, dip your toes in: take a look at our demo dashboard, or just try it out by <Link to='#' onClick={() => context.handleOpenModal('login')}>logging in</Link> with username <span className='democreds'>gandalf</span>, password <span className='democreds'>thewizard</span> !</p>
                <Link to='/demo' className='home-button'>Demo Dashboard</Link>
            </section>
        </main>
    )
}

export default HomePage;