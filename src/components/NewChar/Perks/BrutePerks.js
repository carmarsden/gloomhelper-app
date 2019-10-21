import React from 'react';
import images from '../../../images/images';

class BrutePerks extends React.Component {
    render() {
        return (
            <fieldset id='perks-fieldset'>
                <legend>Perks</legend>
                <div>
                    <input type='checkbox' id='perk-brute-1' name='perk-brute-1' />
                    <label htmlFor='perk-brute-1'>Remove two <img src={images.mods.minus1} alt='-1' className='perk-icon' /> cards</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-brute-2' name='perk-brute-2' />
                    <label htmlFor='perk-brute-2'>Replace one <img src={images.mods.minus1} alt='-1' className='perk-icon' /> card with one <img src={images.mods.plus1} alt='+1' className='perk-icon' /> card</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-brute-3-1' name='perk-brute-3-1' />
                    <input type='checkbox' id='perk-brute-3-2' name='perk-brute-3-2' />
                    <label htmlFor='perk-brute-3-1'>Add two <img src={images.mods.plus1} alt='+1' className='perk-icon' /> cards</label>
                    <label htmlFor='perk-brute-3-2' className='screenreader-only'>Add two +1 cards (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-brute-4' name='perk-brute-4' />
                    <label htmlFor='perk-brute-4'>Add one +3 card</label>                  
                </div>
                <div>
                    <input type='checkbox' id='perk-brute-5-1' name='perk-brute-5-1' />
                    <input type='checkbox' id='perk-brute-5-2' name='perk-brute-5-2' />
                    <label htmlFor='perk-brute-5-1'>Add three <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> PUSH <img src={images.effects.push} alt='PUSH' className='perk-icon' /> 1 cards</label>
                    <label htmlFor='perk-brute-5-2' className='screenreader-only'>Add three rolling PUSH 1 cards (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-brute-6' name='perk-brute-6' />
                    <label htmlFor='perk-brute-6'>Add two <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> PIERCE <img src={images.effects.pierce} alt='PIERCE' className='perk-icon' /> 3 cards</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-brute-7-1' name='perk-brute-7-1' />
                    <input type='checkbox' id='perk-brute-7-2' name='perk-brute-7-2' />
                    <label htmlFor='perk-brute-7-1'>Add one <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> STUN <img src={images.effects.stun} alt='STUN' className='perk-icon' /> card</label>
                    <label htmlFor='perk-brute-7-2' className='screenreader-only'>Add one rolling STUN card (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-brute-8' name='perk-brute-8' />
                    <label htmlFor='perk-brute-8'>Add one <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> DISARM <img src={images.effects.disarm} alt='DISARM' className='perk-icon' /> card and one <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> MUDDLE <img src={images.effects.muddle} alt='MUDDLE' className='perk-icon' /> card</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-brute-9-1' name='perk-brute-9-1' />
                    <input type='checkbox' id='perk-brute-9-2' name='perk-brute-9-2' />
                    <label htmlFor='perk-brute-9-1'>Add one <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> ADD TARGET <img src={images.effects.target} alt='ADD TARGET' className='perk-icon' /> card</label>
                    <label htmlFor='perk-brute-9-2' className='screenreader-only'>Add one rolling ADD TARGET card (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-brute-10' name='perk-brute-10' />
                    <label htmlFor='perk-brute-10'>Add one <img src={images.mods.plus1} alt='+1' className='perk-icon' /> Shield <img src={images.effects.shield} alt='Shield' className='perk-icon' />1, Self card</label>              
                </div>
                <div>
                    <input type='checkbox' id='perk-brute-11' name='perk-brute-11' />
                    <label htmlFor='perk-brute-11'>Ignore negative item effects and add one <img src={images.mods.plus1} alt='+1' className='perk-icon' /> card</label>
                </div>
        </fieldset>
        )
    }
}

export default BrutePerks;