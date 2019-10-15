import React from 'react';
import RenderParty from '../RenderParty/RenderParty';
import RenderChar from '../RenderChar/RenderChar';
import DEMODATA from '../../data/demodata';

class Demo extends React.Component {    
    render() {
        const partyArray = DEMODATA[0];
        const partyComponents = [];
        partyArray.forEach((party, i) => {
            partyComponents.push(<RenderParty key={i}>{party}</RenderParty>)
        })

        const charArray = DEMODATA[1];
        const charComponents = [];
        charArray.forEach((char, i) => {
            charComponents.push(<RenderChar key={i}>{char}</RenderChar>)
        })

        return (
            <main role='main'>
                <section className='bodysection'>
                    <h1>Example User Dashboard</h1>
                </section>
                {partyComponents}
                {charComponents}
            </main>
        )
    }
}

export default Demo;