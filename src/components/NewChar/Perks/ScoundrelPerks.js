import React from 'react';
import images from '../../../images/images';

class ScoundrelPerks extends React.Component {
    render() {
        return (
            <fieldset id='perks-fieldset'>
                <legend>Perks</legend>
                <div>
                    <input type='checkbox' id='perk-scoundrel-1-1' name='perk-scoundrel-1-1' />
                    <input type='checkbox' id='perk-scoundrel-1-2' name='perk-scoundrel-1-2' />
                    <label htmlFor='perk-scoundrel-1-1'>Remove two <img src={images.mods.minus1} alt='-1' className='perk-icon' /> cards</label>
                    <label htmlFor='perk-scoundrel-1-2' className='screenreader-only'>Remove two -1 cards (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-scoundrel-2' name='perk-scoundrel-2' />
                    <label htmlFor='perk-scoundrel-2'>Remove four <img src={images.mods.plus0} alt='+0' className='perk-icon' /> cards</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-scoundrel-3' name='perk-scoundrel-3' />
                    <label htmlFor='perk-scoundrel-3'>Replace one <img src={images.mods.minus2} alt='-2' className='perk-icon' /> card with one <img src={images.mods.plus0} alt='+0' className='perk-icon' /> card</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-scoundrel-4' name='perk-scoundrel-4' />
                    <label htmlFor='perk-scoundrel-4'>Replace one <img src={images.mods.minus1} alt='-1' className='perk-icon' /> card with one <img src={images.mods.plus1} alt='+1' className='perk-icon' /> card</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-scoundrel-5-1' name='perk-scoundrel-5-1' />
                    <input type='checkbox' id='perk-scoundrel-5-2' name='perk-scoundrel-5-2' />
                    <label htmlFor='perk-scoundrel-5-1'>Replace one <img src={images.mods.plus0} alt='+0' className='perk-icon' /> card with one <img src={images.mods.plus2} alt='+2' className='perk-icon' /> card</label>
                    <label htmlFor='perk-scoundrel-5-2' className='screenreader-only'>Replace one +0 card with one +2 card (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-scoundrel-6-1' name='perk-scoundrel-6-1' />
                    <input type='checkbox' id='perk-scoundrel-6-2' name='perk-scoundrel-6-2' />
                    <label htmlFor='perk-scoundrel-6-1'>Add two <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> <img src={images.mods.plus1} alt='+1' className='perk-icon' /> cards</label>
                    <label htmlFor='perk-scoundrel-6-2' className='screenreader-only'>Add two rolling +1 cards (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-scoundrel-7' name='perk-scoundrel-7' />
                    <label htmlFor='perk-scoundrel-7'>Add two <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> PIERCE <img src={images.effects.pierce} alt='PIERCE' className='perk-icon' /> 3 cards</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-scoundrel-8-1' name='perk-scoundrel-8-1' />
                    <input type='checkbox' id='perk-scoundrel-8-2' name='perk-scoundrel-8-2' />
                    <label htmlFor='perk-scoundrel-8-1'>Add two <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> POISON <img src={images.effects.poison} alt='POISON' className='perk-icon' /> cards</label>
                    <label htmlFor='perk-scoundrel-8-2' className='screenreader-only'>Add two rolling POISON cards (second check)</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-scoundrel-9' name='perk-scoundrel-9' />
                    <label htmlFor='perk-scoundrel-9'>Add two <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> MUDDLE <img src={images.effects.muddle} alt='MUDDLE' className='perk-icon' /> cards</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-scoundrel-10' name='perk-scoundrel-10' />
                    <label htmlFor='perk-scoundrel-10'>Add one <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> INVISIBLE <img src={images.effects.invisible} alt='INVISIBLE' className='perk-icon' /> card</label>
                </div>
                <div>
                    <input type='checkbox' id='perk-scoundrel-11' name='perk-scoundrel-11' />
                    <label htmlFor='perk-scoundrel-11'>Ignore negative scenario effects</label>
                </div>
        </fieldset>
        )
    }
}

export default ScoundrelPerks;