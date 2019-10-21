import React from 'react';
import images from '../../../images/images';

class SpellweaverPerks extends React.Component {
    render() {
        return (
            <fieldset id='perks-fieldset'>
                <legend>Perks</legend>
                <div>
                    <input type='checkbox' id='perk-spellweaver-1' name='perk-spellweaver-1' />
                    <label htmlFor='perk-spellweaver-1'>Remove four <img src={images.mods.plus0} alt='+0' className='perk-icon' /> cards</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-spellweaver-2-1' name='perk-spellweaver-2-1' />
                    <input type='checkbox' id='perk-spellweaver-2-2' name='perk-spellweaver-2-2' />
                    <label htmlFor='perk-spellweaver-2-1'>Replace one <img src={images.mods.minus1} alt='-1' className='perk-icon' /> card with one <img src={images.mods.plus1} alt='+1' className='perk-icon' /> card</label>
                    <label htmlFor='perk-spellweaver-2-2' className='screenreader-only'>Replace one -1 card with one +1 card (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-spellweaver-3-1' name='perk-spellweaver-3-1' />
                    <input type='checkbox' id='perk-spellweaver-3-2' name='perk-spellweaver-3-2' />
                    <label htmlFor='perk-spellweaver-3-1'>Add two <img src={images.mods.plus1} alt='+1' className='perk-icon' /> cards</label>
                    <label htmlFor='perk-spellweaver-3-2' className='screenreader-only'>Add two +1 cards (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-spellweaver-4' name='perk-spellweaver-4' />
                    <label htmlFor='perk-spellweaver-4'>Add one <img src={images.mods.plus0} alt='+0' className='perk-icon' /> STUN <img src={images.effects.stun} alt='STUN' className='perk-icon' /> card</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-spellweaver-5' name='perk-spellweaver-5' />
                    <label htmlFor='perk-spellweaver-5'>Add one <img src={images.mods.plus1} alt='+1' className='perk-icon' /> WOUND <img src={images.effects.wound} alt='WOUND' className='perk-icon' /> card</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-spellweaver-6' name='perk-spellweaver-6' />
                    <label htmlFor='perk-spellweaver-6'>Add one <img src={images.mods.plus1} alt='+1' className='perk-icon' /> IMMOBILIZE <img src={images.effects.immobilize} alt='IMMOBILIZE' className='perk-icon' /> card</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-spellweaver-7' name='perk-spellweaver-7' />
                    <label htmlFor='perk-spellweaver-7'>Add one <img src={images.mods.plus1} alt='+1' className='perk-icon' /> CURSE <img src={images.effects.curse} alt='CURSE' className='perk-icon' /> card</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-spellweaver-8-1' name='perk-spellweaver-8-1' />
                    <input type='checkbox' id='perk-spellweaver-8-2' name='perk-spellweaver-8-2' />
                    <label htmlFor='perk-spellweaver-8-1'>Add one <img src={images.mods.plus2} alt='+2' className='perk-icon' /> <img src={images.elements.fire} alt='FIRE ELEMENT' className='perk-icon' /> card</label>
                    <label htmlFor='perk-spellweaver-8-2' className='screenreader-only'>Add one +2 FIRE ELEMENT card (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-spellweaver-9-1' name='perk-spellweaver-9-1' />
                    <input type='checkbox' id='perk-spellweaver-9-2' name='perk-spellweaver-9-2' />
                    <label htmlFor='perk-spellweaver-9-1'>Add one <img src={images.mods.plus2} alt='+2' className='perk-icon' /> <img src={images.elements.ice} alt='ICE ELEMENT' className='perk-icon' /> card</label>
                    <label htmlFor='perk-spellweaver-9-2' className='screenreader-only'>Add one +2 ICE ELEMENT card (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-spellweaver-10' name='perk-spellweaver-10' />
                    <label htmlFor='perk-spellweaver-10'>Add one <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> <img src={images.elements.earth} alt='EARTH ELEMENT' className='perk-icon' /> and one <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> <img src={images.elements.air} alt='AIR ELEMENT' className='perk-icon' /> card</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-spellweaver-11' name='perk-spellweaver-11' />
                    <label htmlFor='perk-spellweaver-11'>Add one <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> <img src={images.elements.light} alt='LIGHT ELEMENT' className='perk-icon' /> and one <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> <img src={images.elements.dark} alt='DARK ELEMENT' className='perk-icon' /> card</label>
                </div>
        </fieldset>
        )
    }
}

export default SpellweaverPerks;