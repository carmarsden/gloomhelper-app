import React from 'react';

class MindthiefPerks extends React.Component {
    render() {
        return (
            <fieldset id='perks-fieldset'>
                <legend>Perks</legend>
                <div>
                    <input type='checkbox' id='perk-mindthief-1-1' name='perk-mindthief-1-1' />
                    <input type='checkbox' id='perk-mindthief-1-2' name='perk-mindthief-1-2' />
                    <label htmlFor='perk-mindthief-1-1'>Remove two -1 cards</label>
                    <label htmlFor='perk-mindthief-1-2' className='screenreader-only'>Remove two -1 cards (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-mindthief-2' name='perk-mindthief-2' />
                    <label htmlFor='perk-mindthief-2'>Remove four +0 cards</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-mindthief-3' name='perk-mindthief-3' />
                    <label htmlFor='perk-mindthief-3'>Replace two +1 cards with two +2 cards</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-mindthief-4' name='perk-mindthief-4' />
                    <label htmlFor='perk-mindthief-4'>Replace one -2 card with one +0 card</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-mindthief-5-1' name='perk-mindthief-5-1' />
                    <input type='checkbox' id='perk-mindthief-5-2' name='perk-mindthief-5-2' />
                    <label htmlFor='perk-mindthief-5-1'>Add one +2 ICE ELEMENT card</label>
                    <label htmlFor='perk-mindthief-5-2' className='screenreader-only'>Add one +2 ICE ELEMENT card (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-mindthief-6-1' name='perk-mindthief-6-1' />
                    <input type='checkbox' id='perk-mindthief-6-2' name='perk-mindthief-6-2' />
                    <label htmlFor='perk-mindthief-6-1'>Add two +1 cards</label>
                    <label htmlFor='perk-mindthief-6-2' className='screenreader-only'>Add two +1 cards (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-mindthief-7' name='perk-mindthief-7' />
                    <label htmlFor='perk-mindthief-7'>Add three PULL 1 cards</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-mindthief-8' name='perk-mindthief-8' />
                    <label htmlFor='perk-mindthief-8'>Add three MUDDLE cards</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-mindthief-9' name='perk-mindthief-9' />
                    <label htmlFor='perk-mindthief-9'>Add two IMMOBILIZE cards</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-mindthief-10' name='perk-mindthief-10' />
                    <label htmlFor='perk-mindthief-10'>Add one STUN card</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-mindthief-11' name='perk-mindthief-11' />
                    <label htmlFor='perk-mindthief-11'>Add one DISARM card and one MUDDLE card</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-mindthief-12' name='perk-mindthief-12' />
                    <label htmlFor='perk-mindthief-12'>Ignore negative scenario effects</label>
                </div>
        </fieldset>
        )
    }
}

export default MindthiefPerks;