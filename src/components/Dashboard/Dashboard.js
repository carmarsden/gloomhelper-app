import React from 'react';

class Dashboard extends React.Component {
    state = {
        toggle: true,
    }

    render() {
        return (
            <main role='main'>
                <section className='bodysection'>
                    <h1>User Dashboard</h1>
                </section>

                <section className='bodysection'>
                    <h2>Party: Gloomhaven Gangsters</h2>
                    <ul>
                    <li>Name: Gloomhaven Gangsters</li>
                    <li>Location: Gloomhaven</li>
                    <li>Reputation: +4</li>
                    <li>Shop Price Modifier: -1</li>
                    <li>Notes: last we checked, we were rising up against Jeksarah--pretty sure she's evil??</li>
                    <li>Achievements: 
                        <ul>
                        <li>First Steps</li>
                        <li>Second Steps</li>
                        </ul>
                    </li>
                    </ul>
                </section>

                <section className='bodysection'>
                    <h2>Inox Brute: Sal</h2>
                    <ul>
                    <li>Name: Sal</li>
                    <li>XP: 32</li>
                    <li>Level: 1</li>
                    <li>Gold Notes: 13 (saving up for chainmail armor)</li>
                    <li>Items:
                        <ul>
                        <li>Eagle Eye Goggles</li>
                        <li>Boots of Striding</li>
                        </ul>
                    </li>
                    <li>General Notes: x2 blessings next scenario</li>
                    <li>Perks: 
                        <ul>
                        <li>Add one +3 card</li>
                        </ul>
                    </li>
                    <li>Battle Goals:
                        <ul>
                        <li>√: ☑ ☑ ☑</li>
                        <li>√: ☑ ☐ ☐</li>
                        <li>√: ☐ ☐ ☐</li>
                        <li>√: ☐ ☐ ☐</li>
                        <li>√: ☐ ☐ ☐</li>
                        <li>√: ☐ ☐ ☐</li>
                        </ul>
                    </li>
                    </ul>
                </section>

                <section className='bodysection'>
                    <h2>Orchid Spellweaver: Transcendy MacMillion</h2>
                    <ul>
                    <li>Name: Transcendy MacMillion</li>
                    <li>XP: 48</li>
                    <li>Level: 2</li>
                    <li>Gold Notes: 46</li>
                    <li>Items:
                        <ul>
                        <li>Minor Manna Potion</li>
                        </ul>
                    </li>
                    <li>General Notes: Elite kills = 4</li>
                    <li>Perks: 
                        <ul>
                        <li>Add one +1 STUN card</li>
                        <li>Add one LEAF and one WIND card</li>
                        </ul>
                    </li>
                    <li>Battle Goals:
                        <ul>
                        <li>√: ☑ ☑ ☐</li>
                        <li>√: ☐ ☐ ☐</li>
                        <li>√: ☐ ☐ ☐</li>
                        <li>√: ☐ ☐ ☐</li>
                        <li>√: ☐ ☐ ☐</li>
                        <li>√: ☐ ☐ ☐</li>
                        </ul>
                    </li>
                    </ul>
                </section>
            </main>
        )
    }
}

export default Dashboard;