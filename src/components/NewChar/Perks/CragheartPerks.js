import React from 'react';

class CragheartPerks extends React.Component {
    render() {
        return (
            <fieldset>
                <legend>Perks</legend>
                <label>
                    <input type='checkbox' id='perk-cragheart-1' name='perk-cragheart-1' />
                    Remove four +0 cards
                </label>
                <label>
                    <input type='checkbox' id='perk-cragheart-2-1' name='perk-cragheart-2-1' />
                    <input type='checkbox' id='perk-cragheart-2-2' name='perk-cragheart-2-2' />
                    <input type='checkbox' id='perk-cragheart-2-3' name='perk-cragheart-2-3' />
                    Replace one -1 card with one +1 card
                </label>
                <label>
                    <input type='checkbox' id='perk-cragheart-3' name='perk-cragheart-3' />
                    Add one -2 card and two +2 cards
                </label>
                <label>
                    <input type='checkbox' id='perk-cragheart-4-1' name='perk-cragheart-4-1' />
                    <input type='checkbox' id='perk-cragheart-4-2' name='perk-cragheart-4-2' />
                    Add one +1 IMMOBILIZE card
                </label>
                <label>
                    <input type='checkbox' id='perk-cragheart-5-1' name='perk-cragheart-5-1' />
                    <input type='checkbox' id='perk-cragheart-5-2' name='perk-cragheart-5-2' />
                    Add one +2 MUDDLE card
                </label>
                <label>
                    <input type='checkbox' id='perk-cragheart-6' name='perk-cragheart-6' />
                    Add two PUSH 2 cards
                </label>
                <label>
                    <input type='checkbox' id='perk-cragheart-7-1' name='perk-cragheart-7-1' />
                    <input type='checkbox' id='perk-cragheart-7-2' name='perk-cragheart-7-2' />
                    Add two EARTH ELEMENT cards
                </label>
                <label>
                    <input type='checkbox' id='perk-cragheart-8' name='perk-cragheart-8' />
                    Add two AIR ELEMENT cards
                </label>
                <label>
                    <input type='checkbox' id='perk-cragheart-9' name='perk-cragheart-9' />
                    Ignore negative item effects
                </label>
                <label>
                    <input type='checkbox' id='perk-cragheart-10' name='perk-cragheart-10' />
                    Ignore negative scenario effects
                </label>
        </fieldset>
        )
    }
}

export default CragheartPerks;