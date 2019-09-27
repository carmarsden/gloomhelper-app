import React from 'react';

class MindthiefPerks extends React.Component {
    render() {
        return (
            <fieldset>
                <legend>Perks</legend>
                <label>
                    <input type='checkbox' id='perk-mindthief-1-1' name='perk-mindthief-1-1' />
                    <input type='checkbox' id='perk-mindthief-1-2' name='perk-mindthief-1-2' />
                    Remove two -1 cards
                </label>
                <label>
                    <input type='checkbox' id='perk-mindthief-2' name='perk-mindthief-2' />
                    Remove four +0 cards
                </label>
                <label>
                    <input type='checkbox' id='perk-mindthief-3' name='perk-mindthief-3' />
                    Replace two +1 cards with two +2 cards
                </label>
                <label>
                    <input type='checkbox' id='perk-mindthief-4' name='perk-mindthief-4' />
                    Replace one -2 card with one +0 card
                </label>
                <label>
                    <input type='checkbox' id='perk-mindthief-5-1' name='perk-mindthief-5-1' />
                    <input type='checkbox' id='perk-mindthief-5-2' name='perk-mindthief-5-2' />
                    Add one +2 ICE ELEMENT card
                </label>
                <label>
                    <input type='checkbox' id='perk-mindthief-6-1' name='perk-mindthief-6-1' />
                    <input type='checkbox' id='perk-mindthief-6-2' name='perk-mindthief-6-2' />
                    Add two +1 cards
                </label>
                <label>
                    <input type='checkbox' id='perk-mindthief-7' name='perk-mindthief-7' />
                    Add three PULL 1 cards
                </label>
                <label>
                    <input type='checkbox' id='perk-mindthief-8' name='perk-mindthief-8' />
                    Add three MUDDLE cards
                </label>
                <label>
                    <input type='checkbox' id='perk-mindthief-9' name='perk-mindthief-9' />
                    Add two IMMOBILIZE cards
                </label>
                <label>
                    <input type='checkbox' id='perk-mindthief-10' name='perk-mindthief-10' />
                    Add one STUN card
                </label>
                <label>
                    <input type='checkbox' id='perk-mindthief-11' name='perk-mindthief-11' />
                    Add one DISARM card and one MUDDLE card
                </label>
                <label>
                    <input type='checkbox' id='perk-mindthief-12' name='perk-mindthief-12' />
                    Ignore negative scenario effects
                </label>
        </fieldset>
        )
    }
}

export default MindthiefPerks;