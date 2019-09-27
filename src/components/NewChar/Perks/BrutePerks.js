import React from 'react';

class BrutePerks extends React.Component {
    render() {
        return (
            <fieldset>
                <legend>Perks</legend>
                <label>
                    <input type='checkbox' id='perk-brute-1' name='perk-brute-1' />
                    Remove two -1 cards
                </label>
                <label>
                    <input type='checkbox' id='perk-brute-2' name='perk-brute-2' />
                    Replace one -1 card with one +1 card
                </label>
                <label>
                    <input type='checkbox' id='perk-brute-3-1' name='perk-brute-3-1' />
                    <input type='checkbox' id='perk-brute-3-2' name='perk-brute-3-2' />
                    Add two +1 cards
                </label>
                <label>
                    <input type='checkbox' id='perk-brute-4' name='perk-brute-4' />
                    Add one +3 card
                </label>
                <label>
                    <input type='checkbox' id='perk-brute-5-1' name='perk-brute-5-1' />
                    <input type='checkbox' id='perk-brute-5-2' name='perk-brute-5-2' />
                    Add three PUSH 1 cards
                </label>
                <label>
                    <input type='checkbox' id='perk-brute-6' name='perk-brute-6' />
                    Add two PIERCE 3 cards
                </label>
                <label>
                    <input type='checkbox' id='perk-brute-7-1' name='perk-brute-7-1' />
                    <input type='checkbox' id='perk-brute-7-2' name='perk-brute-7-2' />
                    Add one STUN card
                </label>
                <label>
                    <input type='checkbox' id='perk-brute-8' name='perk-brute-8' />
                    Add one DISARM card and one MUDDLE card
                </label>
                <label>
                    <input type='checkbox' id='perk-brute-9-1' name='perk-brute-9-1' />
                    <input type='checkbox' id='perk-brute-9-2' name='perk-brute-9-2' />
                    Add one ADD TARGET card
                </label>
                <label>
                    <input type='checkbox' id='perk-brute-10' name='perk-brute-10' />
                    Add one +1 SHIELD 1 Self card
                </label>
                <label>
                    <input type='checkbox' id='perk-brute-11' name='perk-brute-11' />
                    Ignore negative item effects and add one +1 card
                </label>
        </fieldset>
        )
    }
}

export default BrutePerks;