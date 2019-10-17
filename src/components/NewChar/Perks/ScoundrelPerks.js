import React from 'react';

class ScoundrelPerks extends React.Component {
    render() {
        return (
            <fieldset id='perks-fieldset'>
                <legend>Perks</legend>
                <div>
                    <input type='checkbox' id='perk-scoundrel-1-1' name='perk-scoundrel-1-1' />
                    <input type='checkbox' id='perk-scoundrel-1-2' name='perk-scoundrel-1-2' />
                    <label htmlFor='perk-scoundrel-1-1'>Remove two -1 cards</label>
                    <label htmlFor='perk-scoundrel-1-2' className='screenreader-only'>Remove two -1 cards (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-scoundrel-2' name='perk-scoundrel-2' />
                    <label htmlFor='perk-scoundrel-2'>Remove four +0 cards</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-scoundrel-3' name='perk-scoundrel-3' />
                    <label htmlFor='perk-scoundrel-3'>Replace one -2 card with one +0 card</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-scoundrel-4' name='perk-scoundrel-4' />
                    <label htmlFor='perk-scoundrel-4'>Replace one -1 card with one +1 card</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-scoundrel-5-1' name='perk-scoundrel-5-1' />
                    <input type='checkbox' id='perk-scoundrel-5-2' name='perk-scoundrel-5-2' />
                    <label htmlFor='perk-scoundrel-5-1'>Replace one +0 card with one +2 card</label>
                    <label htmlFor='perk-scoundrel-5-2' className='screenreader-only'>Replace one +0 card with one +2 card (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-scoundrel-6-1' name='perk-scoundrel-6-1' />
                    <input type='checkbox' id='perk-scoundrel-6-2' name='perk-scoundrel-6-2' />
                    <label htmlFor='perk-scoundrel-6-1'>Add two +1 cards</label>
                    <label htmlFor='perk-scoundrel-6-2' className='screenreader-only'>Add two +1 cards (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-scoundrel-7' name='perk-scoundrel-7' />
                    <label htmlFor='perk-scoundrel-7'>Add two PIERCE 3 cards</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-scoundrel-8-1' name='perk-scoundrel-8-1' />
                    <input type='checkbox' id='perk-scoundrel-8-2' name='perk-scoundrel-8-2' />
                    <label htmlFor='perk-scoundrel-8-1'>Add two POISON cards</label>
                    <label htmlFor='perk-scoundrel-8-2' className='screenreader-only'>Add two POISON cards (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-scoundrel-9' name='perk-scoundrel-9' />
                    <label htmlFor='perk-scoundrel-9'>Add two MUDDLE cards</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-scoundrel-10' name='perk-scoundrel-10' />
                    <label htmlFor='perk-scoundrel-10'>Add one INVISIBLE card</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-scoundrel-11' name='perk-scoundrel-11' />
                    <label htmlFor='perk-scoundrel-11'>Ignore negative scenario effects</label>
                </div>
        </fieldset>
        )
    }
}

export default ScoundrelPerks;