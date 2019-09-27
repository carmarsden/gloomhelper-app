import React from 'react';

class TinkererPerks extends React.Component {
    render() {
        return (
            <fieldset>
                <legend>Perks</legend>
                <label>
                    <input type='checkbox' id='perk-tinkerer-1-1' name='perk-tinkerer-1-1' />
                    <input type='checkbox' id='perk-tinkerer-1-2' name='perk-tinkerer-1-2' />
                    Remove two -1 cards
                </label>
                <label>
                    <input type='checkbox' id='perk-tinkerer-2' name='perk-tinkerer-2' />
                    Replace one -2 card with one +0 card
                </label>
                <label>
                    <input type='checkbox' id='perk-tinkerer-3' name='perk-tinkerer-3' />
                    Add two +1 cards
                </label>
                <label>
                    <input type='checkbox' id='perk-tinkerer-4' name='perk-tinkerer-4' />
                    Add one +3 card
                </label>
                <label>
                    <input type='checkbox' id='perk-tinkerer-5' name='perk-tinkerer-5' />
                    Add two FIRE ELEMENT cards
                </label>
                <label>
                    <input type='checkbox' id='perk-tinkerer-6' name='perk-tinkerer-6' />
                    Add three MUDDLE cards
                </label>
                <label>
                    <input type='checkbox' id='perk-tinkerer-7-1' name='perk-tinkerer-7-1' />
                    <input type='checkbox' id='perk-tinkerer-7-2' name='perk-tinkerer-7-2' />
                    Add one +1 WOUND card
                </label>
                <label>
                    <input type='checkbox' id='perk-tinkerer-8-1' name='perk-tinkerer-8-1' />
                    <input type='checkbox' id='perk-tinkerer-8-2' name='perk-tinkerer-8-2' />
                    Add one +1 IMMOBILIZE card
                </label>
                <label>
                    <input type='checkbox' id='perk-tinkerer-9-1' name='perk-tinkerer-9-1' />
                    <input type='checkbox' id='perk-tinkerer-9-2' name='perk-tinkerer-9-2' />
                    Add one +1 HEAL 2 card
                </label>
                <label>
                    <input type='checkbox' id='perk-tinkerer-10' name='perk-tinkerer-10' />
                    Add one +0 ADD TARGET card
                </label>
                <label>
                    <input type='checkbox' id='perk-tinkerer-11' name='perk-tinkerer-11' />
                    Ignore negative scenario effects
                </label>
        </fieldset>
        )
    }
}

export default TinkererPerks;