import React from 'react';

class BrutePerks extends React.Component {
    render() {
        return (
            <fieldset id='perks-fieldset'>
                <legend>Perks</legend>
                <div>
                    <input type='checkbox' id='perk-brute-1' name='perk-brute-1' />
                    <label htmlFor='perk-brute-1'>Remove two -1 cards</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-brute-2' name='perk-brute-2' />
                    <label htmlFor='perk-brute-2'>Replace one -1 card with one +1 card</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-brute-3-1' name='perk-brute-3-1' />
                    <input type='checkbox' id='perk-brute-3-2' name='perk-brute-3-2' />
                    <label htmlFor='perk-brute-3-1'>Add two +1 cards</label>
                    <label htmlFor='perk-brute-3-2' className='screenreader-only'>Add two +1 cards (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-brute-4' name='perk-brute-4' />
                    <label htmlFor='perk-brute-4'>Add one +3 card</label>                  
                </div>
                <div>
                    <input type='checkbox' id='perk-brute-5-1' name='perk-brute-5-1' />
                    <input type='checkbox' id='perk-brute-5-2' name='perk-brute-5-2' />
                    <label htmlFor='perk-brute-5-1'>Add three PUSH 1 cards</label>
                    <label htmlFor='perk-brute-5-2' className='screenreader-only'>Add three PUSH 1 cards (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-brute-6' name='perk-brute-6' />
                    <label htmlFor='perk-brute-6'>Add two PIERCE 3 cards</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-brute-7-1' name='perk-brute-7-1' />
                    <input type='checkbox' id='perk-brute-7-2' name='perk-brute-7-2' />
                    <label htmlFor='perk-brute-7-1'>Add one STUN card</label>
                    <label htmlFor='perk-brute-7-2' className='screenreader-only'>Add one STUN card (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-brute-8' name='perk-brute-8' />
                    <label htmlFor='perk-brute-8'>Add one DISARM card and one MUDDLE card</label>               
                </div>
                <div>
                    <input type='checkbox' id='perk-brute-9-1' name='perk-brute-9-1' />
                    <input type='checkbox' id='perk-brute-9-2' name='perk-brute-9-2' />
                    <label htmlFor='perk-brute-9-1'>Add one ADD TARGET card</label>
                    <label htmlFor='perk-brute-9-2' className='screenreader-only'>Add one ADD TARGET card (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-brute-10' name='perk-brute-10' />
                    <label htmlFor='perk-brute-10'>Add one +1 SHIELD 1 Self card</label>              
                </div>
                <div>
                    <input type='checkbox' id='perk-brute-11' name='perk-brute-11' />
                    <label htmlFor='perk-brute-11'>Ignore negative item effects and add one +1 card</label>
                </div>
        </fieldset>
        )
    }
}

export default BrutePerks;