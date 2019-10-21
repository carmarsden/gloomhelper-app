import React from 'react';
import images from '../../../images/images';

class CragheartPerks extends React.Component {
    render() {
        return (
            <fieldset id='perks-fieldset'>
                <legend>Perks</legend>
                <div>
                    <input type='checkbox' id='perk-cragheart-1' name='perk-cragheart-1' />
                    <label htmlFor='perk-cragheart-1'>Remove four <img src={images.mods.plus0} alt='+0' className='perk-icon' /> cards</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-cragheart-2-1' name='perk-cragheart-2-1' />
                    <input type='checkbox' id='perk-cragheart-2-2' name='perk-cragheart-2-2' />
                    <input type='checkbox' id='perk-cragheart-2-3' name='perk-cragheart-2-3' />
                    <label htmlFor='perk-cragheart-2-1'>Replace one <img src={images.mods.minus1} alt='-1' className='perk-icon' /> card with one <img src={images.mods.plus1} alt='+1' className='perk-icon' /> card</label>
                    <label htmlFor='perk-cragheart-2-2' className='screenreader-only'>Replace one -1 card with one +1 card (second check)</label>
                    <label htmlFor='perk-cragheart-2-3' className='screenreader-only'>Replace one -1 card with one +1 card (third check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-cragheart-3' name='perk-cragheart-3' />
                    <label htmlFor='perk-cragheart-3'>Add one <img src={images.mods.minus2} alt='-2' className='perk-icon' /> card and two <img src={images.mods.plus2} alt='+2' className='perk-icon' /> cards</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-cragheart-4-1' name='perk-cragheart-4-1' />
                    <input type='checkbox' id='perk-cragheart-4-2' name='perk-cragheart-4-2' />
                    <label htmlFor='perk-cragheart-4-1'>Add one <img src={images.mods.plus1} alt='+1' className='perk-icon' /> IMMOBILIZE <img src={images.effects.immobilize} alt='IMMOBILIZE' className='perk-icon' /> card</label>
                    <label htmlFor='perk-cragheart-4-2' className='screenreader-only'>Add one +1 IMMOBILIZE card (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-cragheart-5-1' name='perk-cragheart-5-1' />
                    <input type='checkbox' id='perk-cragheart-5-2' name='perk-cragheart-5-2' />
                    <label htmlFor='perk-cragheart-5-1'>Add one <img src={images.mods.plus2} alt='+2' className='perk-icon' /> MUDDLE <img src={images.effects.muddle} alt='MUDDLE' className='perk-icon' /> card</label>
                    <label htmlFor='perk-cragheart-5-2' className='screenreader-only'>Add one +2 MUDDLE card (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-cragheart-6' name='perk-cragheart-6' />
                    <label htmlFor='perk-cragheart-6'>Add two <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> PUSH <img src={images.effects.push} alt='PUSH' className='perk-icon' /> 2 cards</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-cragheart-7-1' name='perk-cragheart-7-1' />
                    <input type='checkbox' id='perk-cragheart-7-2' name='perk-cragheart-7-2' />
                    <label htmlFor='perk-cragheart-7-1'>Add two <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> <img src={images.elements.earth} alt='EARTH ELEMENT' className='perk-icon' /> cards</label>
                    <label htmlFor='perk-cragheart-7-2' className='screenreader-only'>Add two rolling EARTH ELEMENT cards (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-cragheart-8' name='perk-cragheart-8' />
                    <label htmlFor='perk-cragheart-8'>Add two <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> <img src={images.elements.air} alt='AIR ELEMENT' className='perk-icon' /> cards</label>
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