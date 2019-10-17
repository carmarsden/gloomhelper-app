import React from 'react';

class TinkererPerks extends React.Component {
    render() {
        return (
            <fieldset id='perks-fieldset'>
                <legend>Perks</legend>
                <div>
                    <input type='checkbox' id='perk-tinkerer-1-1' name='perk-tinkerer-1-1' />
                    <input type='checkbox' id='perk-tinkerer-1-2' name='perk-tinkerer-1-2' />
                    <label htmlFor='perk-tinkerer-1-1'>Remove two -1 cards</label>
                    <label htmlFor='perk-tinkerer-1-2' className='screenreader-only'>Remove two -1 cards (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-tinkerer-2' name='perk-tinkerer-2' />
                    <label htmlFor='perk-tinkerer-2'>Replace one -2 card with one +0 card</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-tinkerer-3' name='perk-tinkerer-3' />
                    <label htmlFor='perk-tinkerer-3'>Add two +1 cards</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-tinkerer-4' name='perk-tinkerer-4' />
                    <label htmlFor='perk-tinkerer-4'>Add one +3 card</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-tinkerer-5' name='perk-tinkerer-5' />
                    <label htmlFor='perk-tinkerer-5'>Add two FIRE ELEMENT cards</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-tinkerer-6' name='perk-tinkerer-6' />
                    <label htmlFor='perk-tinkerer-6'>Add three MUDDLE cards</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-tinkerer-7-1' name='perk-tinkerer-7-1' />
                    <input type='checkbox' id='perk-tinkerer-7-2' name='perk-tinkerer-7-2' />
                    <label htmlFor='perk-tinkerer-7-1'>Add one +1 WOUND card</label>
                    <label htmlFor='perk-tinkerer-7-2' className='screenreader-only'>Add one +1 WOUND card (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-tinkerer-8-1' name='perk-tinkerer-8-1' />
                    <input type='checkbox' id='perk-tinkerer-8-2' name='perk-tinkerer-8-2' />
                    <label htmlFor='perk-tinkerer-8-1'>Add one +1 IMMOBILIZE card</label>
                    <label htmlFor='perk-tinkerer-8-2' className='screenreader-only'>Add one +1 IMMOBILIZE card (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-tinkerer-9-1' name='perk-tinkerer-9-1' />
                    <input type='checkbox' id='perk-tinkerer-9-2' name='perk-tinkerer-9-2' />
                    <label htmlFor='perk-tinkerer-9-1'>Add one +1 HEAL 2 card</label>
                    <label htmlFor='perk-tinkerer-9-2' className='screenreader-only'>Add one +1 HEAL 2 card (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-tinkerer-10' name='perk-tinkerer-10' />
                    <label htmlFor='perk-tinkerer-10'>Add one +0 ADD TARGET card</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-tinkerer-11' name='perk-tinkerer-11' />
                    <label htmlFor='perk-tinkerer-11'>Ignore negative scenario effects</label>
                </div>
        </fieldset>
        )
    }
}

export default TinkererPerks;