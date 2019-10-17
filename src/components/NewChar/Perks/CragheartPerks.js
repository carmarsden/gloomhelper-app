import React from 'react';

class CragheartPerks extends React.Component {
    render() {
        return (
            <fieldset id='perks-fieldset'>
                <legend>Perks</legend>
                <div>
                    <input type='checkbox' id='perk-cragheart-1' name='perk-cragheart-1' />
                    <label htmlFor='perk-cragheart-1'>Remove four +0 cards</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-cragheart-2-1' name='perk-cragheart-2-1' />
                    <input type='checkbox' id='perk-cragheart-2-2' name='perk-cragheart-2-2' />
                    <input type='checkbox' id='perk-cragheart-2-3' name='perk-cragheart-2-3' />
                    <label htmlFor='perk-cragheart-2-1'>Replace one -1 card with one +1 card</label>
                    <label htmlFor='perk-cragheart-2-2' className='screenreader-only'>Replace one -1 card with one +1 card (second check)</label>
                    <label htmlFor='perk-cragheart-2-3' className='screenreader-only'>Replace one -1 card with one +1 card (third check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-cragheart-3' name='perk-cragheart-3' />
                    <label htmlFor='perk-cragheart-3'>Add one -2 card and two +2 cards</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-cragheart-4-1' name='perk-cragheart-4-1' />
                    <input type='checkbox' id='perk-cragheart-4-2' name='perk-cragheart-4-2' />
                    <label htmlFor='perk-cragheart-4-1'>Add one +1 IMMOBILIZE card</label>
                    <label htmlFor='perk-cragheart-4-2' className='screenreader-only'>Add one +1 IMMOBILIZE card (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-cragheart-5-1' name='perk-cragheart-5-1' />
                    <input type='checkbox' id='perk-cragheart-5-2' name='perk-cragheart-5-2' />
                    <label htmlFor='perk-cragheart-5-1'>Add one +2 MUDDLE card</label>
                    <label htmlFor='perk-cragheart-5-2' className='screenreader-only'>Add one +2 MUDDLE card (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-cragheart-6' name='perk-cragheart-6' />
                    <label htmlFor='perk-cragheart-6'>Add two PUSH 2 cards</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-cragheart-7-1' name='perk-cragheart-7-1' />
                    <input type='checkbox' id='perk-cragheart-7-2' name='perk-cragheart-7-2' />
                    <label htmlFor='perk-cragheart-7-1'>Add two EARTH ELEMENT cards</label>
                    <label htmlFor='perk-cragheart-7-2' className='screenreader-only'>Add two EARTH ELEMENT cards (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-cragheart-8' name='perk-cragheart-8' />
                    <label htmlFor='perk-cragheart-8'>Add two AIR ELEMENT cards</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-cragheart-9' name='perk-cragheart-9' />
                    <label htmlFor='perk-cragheart-9'>Ignore negative item effects</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-cragheart-10' name='perk-cragheart-10' />
                    <label htmlFor='perk-cragheart-10'>Ignore negative scenario effects</label>
                </div>
        </fieldset>
        )
    }
}

export default CragheartPerks;