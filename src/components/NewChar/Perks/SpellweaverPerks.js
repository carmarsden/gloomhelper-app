import React from 'react';

class SpellweaverPerks extends React.Component {
    render() {
        return (
            <fieldset id='perks-fieldset'>
                <legend>Perks</legend>
                <div>
                    <input type='checkbox' id='perk-spellweaver-1' name='perk-spellweaver-1' />
                    <label htmlFor='perk-spellweaver-1'>Remove four +0 cards</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-spellweaver-2-1' name='perk-spellweaver-2-1' />
                    <input type='checkbox' id='perk-spellweaver-2-2' name='perk-spellweaver-2-2' />
                    <label htmlFor='perk-spellweaver-2-1'>Replace one -1 card with one +1 card</label>
                    <label htmlFor='perk-spellweaver-2-2' className='screenreader-only'>Replace one -1 card with one +1 card (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-spellweaver-3-1' name='perk-spellweaver-3-1' />
                    <input type='checkbox' id='perk-spellweaver-3-2' name='perk-spellweaver-3-2' />
                    <label htmlFor='perk-spellweaver-3-1'>Add two +1 cards</label>
                    <label htmlFor='perk-spellweaver-3-2' className='screenreader-only'>Add two +1 cards (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-spellweaver-4' name='perk-spellweaver-4' />
                    <label htmlFor='perk-spellweaver-4'>Add one +0 STUN card</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-spellweaver-5' name='perk-spellweaver-5' />
                    <label htmlFor='perk-spellweaver-5'>Add one +1 WOUND card</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-spellweaver-6' name='perk-spellweaver-6' />
                    <label htmlFor='perk-spellweaver-6'>Add one +1 IMMOBILIZE card</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-spellweaver-7' name='perk-spellweaver-7' />
                    <label htmlFor='perk-spellweaver-7'>Add one +1 CURSE card</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-spellweaver-8-1' name='perk-spellweaver-8-1' />
                    <input type='checkbox' id='perk-spellweaver-8-2' name='perk-spellweaver-8-2' />
                    <label htmlFor='perk-spellweaver-8-1'>Add one +2 FIRE ELEMENT card</label>
                    <label htmlFor='perk-spellweaver-8-2' className='screenreader-only'>Add one +2 FIRE ELEMENT card (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-spellweaver-9-1' name='perk-spellweaver-9-1' />
                    <input type='checkbox' id='perk-spellweaver-9-2' name='perk-spellweaver-9-2' />
                    <label htmlFor='perk-spellweaver-9-1'>Add one +2 ICE ELEMENT card</label>
                    <label htmlFor='perk-spellweaver-9-2' className='screenreader-only'>Add one +2 ICE ELEMENT card (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-spellweaver-10' name='perk-spellweaver-10' />
                    <label htmlFor='perk-spellweaver-10'>Add one EARTH ELEMENT and one AIR ELEMENT card</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-spellweaver-11' name='perk-spellweaver-11' />
                    <label htmlFor='perk-spellweaver-11'>Add one LIGHT ELEMENT and one DARK ELEMENT card</label>
                </div>
        </fieldset>
        )
    }
}

export default SpellweaverPerks;