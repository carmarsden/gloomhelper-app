import React from 'react';
import images from '../../../images/images';

class MindthiefPerks extends React.Component {
    render() {
        return (
            <fieldset id='perks-fieldset'>
                <legend>Perks</legend>
                <div>
                    <input type='checkbox' id='perk-mindthief-1-1' name='perk-mindthief-1-1' />
                    <input type='checkbox' id='perk-mindthief-1-2' name='perk-mindthief-1-2' />
                    <label htmlFor='perk-mindthief-1-1'>Remove two <img src={images.mods.minus1} alt='-1' className='perk-icon' /> cards</label>
                    <label htmlFor='perk-mindthief-1-2' className='screenreader-only'>Remove two -1 cards (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-mindthief-2' name='perk-mindthief-2' />
                    <label htmlFor='perk-mindthief-2'>Remove four <img src={images.mods.plus0} alt='+0' className='perk-icon' /> cards</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-mindthief-3' name='perk-mindthief-3' />
                    <label htmlFor='perk-mindthief-3'>Replace two <img src={images.mods.plus1} alt='+1' className='perk-icon' /> cards with two <img src={images.mods.plus2} alt='+2' className='perk-icon' /> cards</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-mindthief-4' name='perk-mindthief-4' />
                    <label htmlFor='perk-mindthief-4'>Replace one <img src={images.mods.minus2} alt='-2' className='perk-icon' /> card with one <img src={images.mods.plus0} alt='+0' className='perk-icon' /> card</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-mindthief-5-1' name='perk-mindthief-5-1' />
                    <input type='checkbox' id='perk-mindthief-5-2' name='perk-mindthief-5-2' />
                    <label htmlFor='perk-mindthief-5-1'>Add one <img src={images.mods.plus2} alt='+2' className='perk-icon' /> <img src={images.elements.ice} alt='ICE ELEMENT' className='perk-icon' /> card</label>
                    <label htmlFor='perk-mindthief-5-2' className='screenreader-only'>Add one +2 ICE ELEMENT card (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-mindthief-6-1' name='perk-mindthief-6-1' />
                    <input type='checkbox' id='perk-mindthief-6-2' name='perk-mindthief-6-2' />
                    <label htmlFor='perk-mindthief-6-1'>Add two <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> <img src={images.mods.plus1} alt='+1' className='perk-icon' /> cards</label>
                    <label htmlFor='perk-mindthief-6-2' className='screenreader-only'>Add two rolling +1 cards (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-mindthief-7' name='perk-mindthief-7' />
                    <label htmlFor='perk-mindthief-7'>Add three <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> PULL <img src={images.effects.pull} alt='PULL' className='perk-icon' /> 1 cards</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-mindthief-8' name='perk-mindthief-8' />
                    <label htmlFor='perk-mindthief-8'>Add three <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> MUDDLE <img src={images.effects.muddle} alt='MUDDLE' className='perk-icon' /> cards</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-mindthief-9' name='perk-mindthief-9' />
                    <label htmlFor='perk-mindthief-9'>Add two <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> IMMOBILIZE <img src={images.effects.immobilize} alt='IMMOBILIZE' className='perk-icon' /> cards</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-mindthief-10' name='perk-mindthief-10' />
                    <label htmlFor='perk-mindthief-10'>Add one <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> STUN <img src={images.effects.stun} alt='STUN' className='perk-icon' /> card</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-mindthief-11' name='perk-mindthief-11' />
                    <label htmlFor='perk-mindthief-11'>Add one <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> DISARM <img src={images.effects.disarm} alt='DISARM' className='perk-icon' /> card and one <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> MUDDLE <img src={images.effects.muddle} alt='MUDDLE' className='perk-icon' /> card</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-mindthief-12' name='perk-mindthief-12' />
                    <label htmlFor='perk-mindthief-12'>Ignore negative scenario effects</label>
                </div>
        </fieldset>
        )
    }
}

export default MindthiefPerks;