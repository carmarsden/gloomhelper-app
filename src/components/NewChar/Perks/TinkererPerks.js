import React from 'react';
import images from '../../../images/images';

class TinkererPerks extends React.Component {
    render() {
        return (
            <fieldset id='perks-fieldset'>
                <legend>Perks</legend>
                <div>
                    <input type='checkbox' id='perk-tinkerer-1-1' name='perk-tinkerer-1-1' />
                    <input type='checkbox' id='perk-tinkerer-1-2' name='perk-tinkerer-1-2' />
                    <label htmlFor='perk-tinkerer-1-1'>Remove two <img src={images.mods.minus1} alt='-1' className='perk-icon' /> cards</label>
                    <label htmlFor='perk-tinkerer-1-2' className='screenreader-only'>Remove two -1 cards (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-tinkerer-2' name='perk-tinkerer-2' />
                    <label htmlFor='perk-tinkerer-2'>Replace one <img src={images.mods.minus2} alt='-2' className='perk-icon' /> card with one <img src={images.mods.plus0} alt='+0' className='perk-icon' /> card</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-tinkerer-3' name='perk-tinkerer-3' />
                    <label htmlFor='perk-tinkerer-3'>Add two <img src={images.mods.plus1} alt='+1' className='perk-icon' /> cards</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-tinkerer-4' name='perk-tinkerer-4' />
                    <label htmlFor='perk-tinkerer-4'>Add one +3 card</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-tinkerer-5' name='perk-tinkerer-5' />
                    <label htmlFor='perk-tinkerer-5'>Add two <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> <img src={images.elements.fire} alt='FIRE ELEMENT' className='perk-icon' /> cards</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-tinkerer-6' name='perk-tinkerer-6' />
                    <label htmlFor='perk-tinkerer-6'>Add three <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> MUDDLE <img src={images.effects.muddle} alt='MUDDLE' className='perk-icon' /> cards</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-tinkerer-7-1' name='perk-tinkerer-7-1' />
                    <input type='checkbox' id='perk-tinkerer-7-2' name='perk-tinkerer-7-2' />
                    <label htmlFor='perk-tinkerer-7-1'>Add one <img src={images.mods.plus1} alt='+1' className='perk-icon' /> WOUND <img src={images.effects.wound} alt='wound' className='perk-icon' /> card</label>
                    <label htmlFor='perk-tinkerer-7-2' className='screenreader-only'>Add one +1 WOUND card (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-tinkerer-8-1' name='perk-tinkerer-8-1' />
                    <input type='checkbox' id='perk-tinkerer-8-2' name='perk-tinkerer-8-2' />
                    <label htmlFor='perk-tinkerer-8-1'>Add one <img src={images.mods.plus1} alt='+1' className='perk-icon' /> IMMOBILIZE <img src={images.effects.immobilize} alt='IMMOBILIZE' className='perk-icon' /> card</label>
                    <label htmlFor='perk-tinkerer-8-2' className='screenreader-only'>Add one +1 IMMOBILIZE card (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-tinkerer-9-1' name='perk-tinkerer-9-1' />
                    <input type='checkbox' id='perk-tinkerer-9-2' name='perk-tinkerer-9-2' />
                    <label htmlFor='perk-tinkerer-9-1'>Add one <img src={images.mods.plus1} alt='+1' className='perk-icon' /> HEAL <img src={images.effects.heal} alt='Heal' className='perk-icon' />2 card</label>
                    <label htmlFor='perk-tinkerer-9-2' className='screenreader-only'>Add one +1 HEAL 2 card (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-tinkerer-10' name='perk-tinkerer-10' />
                    <label htmlFor='perk-tinkerer-10'>Add one <img src={images.mods.plus0} alt='+0' className='perk-icon' /> ADD TARGET <img src={images.effects.target} alt='ADD TARGET' className='perk-icon' /> card</label>
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