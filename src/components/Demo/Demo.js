import React from 'react';
import Collapsible from '../../containers/Collapsible/Collapsible';
import DEMODATA from './demodata';
import RenderParty from '../RenderParty/RenderParty';

class Demo extends React.Component {    
    render() {
        console.log(DEMODATA);

        const partyArray = DEMODATA[0];
        const partyComponents = [];
        partyArray.forEach((party, i) => {
            partyComponents.push(<RenderParty key={i} party={party} />)
        })

        return (
            <main role='main'>
                <section className='bodysection'>
                    <h1>Example User Dashboard</h1>
                </section>

                {partyComponents}

                <Collapsible title='Inox Brute: Sal'>
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
                </Collapsible>

                <Collapsible title='Orchid Spellweaver: Transcendy MacMillion'>
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
                                <li>Add one +0 STUN card</li>
                                <li>Add one EARTH ELEMENT and one AIR ELEMENT card</li>
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
                </Collapsible>

            </main>
        )
    }
}

export default Demo;