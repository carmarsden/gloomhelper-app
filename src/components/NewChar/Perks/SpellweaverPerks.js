import React from 'react';

class SpellweaverPerks extends React.Component {
    render() {
        return (
            <fieldset>
                <legend>Perks</legend>
                <label>
                    <input type='checkbox' id='perk-spellweaver-1' name='perk-spellweaver-1' />
                    Remove four +0 cards
                </label>
                <label>
                    <input type='checkbox' id='perk-spellweaver-2-1' name='perk-spellweaver-2-1' />
                    <input type='checkbox' id='perk-spellweaver-2-2' name='perk-spellweaver-2-2' />
                    Replace one -1 card with one +1 card
                </label>
                <label>
                    <input type='checkbox' id='perk-spellweaver-3-1' name='perk-spellweaver-3-1' />
                    <input type='checkbox' id='perk-spellweaver-3-2' name='perk-spellweaver-3-2' />
                    Add two +1 cards
                </label>
                <label>
                    <input type='checkbox' id='perk-spellweaver-4' name='perk-spellweaver-4' />
                    Add one +0 STUN card
                </label>
                <label>
                    <input type='checkbox' id='perk-spellweaver-5' name='perk-spellweaver-5' />
                    Add one +1 WOUND card
                </label>
                <label>
                    <input type='checkbox' id='perk-spellweaver-6' name='perk-spellweaver-6' />
                    Add one +1 IMMOBILIZE card
                </label>
                <label>
                    <input type='checkbox' id='perk-spellweaver-7' name='perk-spellweaver-7' />
                    Add one +1 CURSE card
                </label>
                <label>
                    <input type='checkbox' id='perk-spellweaver-8-1' name='perk-spellweaver-8-1' />
                    <input type='checkbox' id='perk-spellweaver-8-2' name='perk-spellweaver-8-2' />
                    Add one +2 FIRE ELEMENT card
                </label>
                <label>
                    <input type='checkbox' id='perk-spellweaver-9-1' name='perk-spellweaver-9-1' />
                    <input type='checkbox' id='perk-spellweaver-9-2' name='perk-spellweaver-9-2' />
                    Add one +2 ICE ELEMENT card
                </label>
                <label>
                    <input type='checkbox' id='perk-spellweaver-10' name='perk-spellweaver-10' />
                    Add one EARTH ELEMENT and one AIR ELEMENT card
                </label>
                <label>
                    <input type='checkbox' id='perk-spellweaver-11' name='perk-spellweaver-11' />
                    Add one LIGHT ELEMENT and one DARK ELEMENT card
                </label>
        </fieldset>
        )
    }
}

export default SpellweaverPerks;