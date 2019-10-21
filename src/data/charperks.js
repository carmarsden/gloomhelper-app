import React from 'react';
import images from '../images/images';

// number x means that perk is the same as the perk x prior
// all perks arrays should have 15 items total

function allPerks() {
    return ([
        {
            code: 'brute',
            perks: [
                <span>Remove two <img src={images.mods.minus1} alt='-1' className='perk-icon' /> cards</span>,
                <span>Replace one <img src={images.mods.minus1} alt='-1' className='perk-icon' /> card with one <img src={images.mods.plus1} alt='+1' className='perk-icon' /> card</span>,
                <span>Add two <img src={images.mods.plus1} alt='+1' className='perk-icon' /> cards</span>,
                1,
                <span>Add one +3 card</span>,
                <span>Add three <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> PUSH <img src={images.effects.push} alt='PUSH' className='perk-icon' /> 1 cards</span>,
                1,
                <span>Add two <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> PIERCE <img src={images.effects.pierce} alt='PIERCE' className='perk-icon' /> 3 cards</span>,
                <span>Add one <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> STUN <img src={images.effects.stun} alt='STUN' className='perk-icon' /> card</span>,
                1,
                <span>Add one <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> DISARM <img src={images.effects.disarm} alt='DISARM' className='perk-icon' /> card and one <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> MUDDLE <img src={images.effects.muddle} alt='MUDDLE' className='perk-icon' /> card</span>,
                <span>Add one <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> ADD TARGET <img src={images.effects.target} alt='ADD TARGET' className='perk-icon' /> card</span>,
                1,
                <span>Add one <img src={images.mods.plus1} alt='+1' className='perk-icon' /> Shield <img src={images.effects.shield} alt='Shield' className='perk-icon' />1, Self card</span>,
                <span>Ignore negative item effects and add one <img src={images.mods.plus1} alt='+1' className='perk-icon' /> card</span>,
            ]
        },
        {
            code: 'cragheart',
            perks: [
                <span>Remove four <img src={images.mods.plus0} alt='+0' className='perk-icon' /> cards</span>,
                <span>Replace one <img src={images.mods.minus1} alt='-1' className='perk-icon' /> card with one <img src={images.mods.plus1} alt='+1' className='perk-icon' /> card</span>,
                1,
                2,
                <span>Add one <img src={images.mods.minus2} alt='-2' className='perk-icon' /> card and two <img src={images.mods.plus2} alt='+2' className='perk-icon' /> cards</span>,
                <span>Add one <img src={images.mods.plus1} alt='+1' className='perk-icon' /> IMMOBILIZE <img src={images.effects.immobilize} alt='IMMOBILIZE' className='perk-icon' /> card</span>,
                1,
                <span>Add one <img src={images.mods.plus2} alt='+2' className='perk-icon' /> MUDDLE <img src={images.effects.muddle} alt='MUDDLE' className='perk-icon' /> card</span>,
                1,
                <span>Add two <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> PUSH <img src={images.effects.push} alt='PUSH' className='perk-icon' /> 2 cards</span>,
                <span>Add two <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> <img src={images.elements.earth} alt='EARTH ELEMENT' className='perk-icon' /> cards</span>,
                1,
                <span>Add two <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> <img src={images.elements.air} alt='AIR ELEMENT' className='perk-icon' /> cards</span>,
                <span>Ignore negative item effects</span>,
                <span>Ignore negative scenario effects</span>,
            ]
        },
        {
            code: 'mindthief',
            perks: [
                <span>Remove two <img src={images.mods.minus1} alt='-1' className='perk-icon' /> cards</span>,
                1,
                <span>Remove four <img src={images.mods.plus0} alt='+0' className='perk-icon' /> cards</span>,
                <span>Replace two <img src={images.mods.plus1} alt='+1' className='perk-icon' /> cards with two <img src={images.mods.plus2} alt='+2' className='perk-icon' /> cards</span>,
                <span>Replace one <img src={images.mods.minus2} alt='-2' className='perk-icon' /> card with one <img src={images.mods.plus0} alt='+0' className='perk-icon' /> card</span>,
                <span>Add one <img src={images.mods.plus2} alt='+2' className='perk-icon' /> <img src={images.elements.ice} alt='ICE ELEMENT' className='perk-icon' /> card</span>,
                1,
                <span>Add two <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> <img src={images.mods.plus1} alt='+1' className='perk-icon' /> cards</span>,
                1,
                <span>Add three <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> PULL <img src={images.effects.pull} alt='PULL' className='perk-icon' /> 1 cards</span>,
                <span>Add three <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> MUDDLE <img src={images.effects.muddle} alt='MUDDLE' className='perk-icon' /> cards</span>,
                <span>Add two <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> IMMOBILIZE <img src={images.effects.immobilize} alt='IMMOBILIZE' className='perk-icon' /> cards</span>,
                <span>Add one <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> STUN <img src={images.effects.stun} alt='STUN' className='perk-icon' /> card</span>,
                <span>Add one <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> DISARM <img src={images.effects.disarm} alt='DISARM' className='perk-icon' /> card and one <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> MUDDLE <img src={images.effects.muddle} alt='MUDDLE' className='perk-icon' /> card</span>,
                <span>Ignore negative scenario effects</span>,
            ]
        },
        {
            code: 'spellweaver',
            perks: [
                <span>Remove four <img src={images.mods.plus0} alt='+0' className='perk-icon' /> cards</span>,
                <span>Replace one <img src={images.mods.minus1} alt='-1' className='perk-icon' /> card with one <img src={images.mods.plus1} alt='+1' className='perk-icon' /> card</span>,
                1,
                <span>Add two <img src={images.mods.plus1} alt='+1' className='perk-icon' /> cards</span>,
                1,
                <span>Add one <img src={images.mods.plus0} alt='+0' className='perk-icon' /> STUN <img src={images.effects.stun} alt='STUN' className='perk-icon' /> card</span>,
                <span>Add one <img src={images.mods.plus1} alt='+1' className='perk-icon' /> WOUND <img src={images.effects.wound} alt='WOUND' className='perk-icon' /> card</span>,
                <span>Add one <img src={images.mods.plus1} alt='+1' className='perk-icon' /> IMMOBILIZE <img src={images.effects.immobilize} alt='IMMOBILIZE' className='perk-icon' /> card</span>,
                <span>Add one <img src={images.mods.plus1} alt='+1' className='perk-icon' /> CURSE <img src={images.effects.curse} alt='CURSE' className='perk-icon' /> card</span>,
                <span>Add one <img src={images.mods.plus2} alt='+2' className='perk-icon' /> <img src={images.elements.fire} alt='FIRE ELEMENT' className='perk-icon' /> card</span>,
                1,
                <span>Add one <img src={images.mods.plus2} alt='+2' className='perk-icon' /> <img src={images.elements.ice} alt='ICE ELEMENT' className='perk-icon' /> card</span>,
                1,
                <span>Add one <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> <img src={images.elements.earth} alt='EARTH ELEMENT' className='perk-icon' /> and one <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> <img src={images.elements.air} alt='AIR ELEMENT' className='perk-icon' /> card</span>,
                <span>Add one <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> <img src={images.elements.light} alt='LIGHT ELEMENT' className='perk-icon' /> and one <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> <img src={images.elements.dark} alt='DARK ELEMENT' className='perk-icon' /> card</span>,
            ]
        },
        {
            code: 'scoundrel',
            perks: [
                <span>Remove two <img src={images.mods.minus1} alt='-1' className='perk-icon' /> cards</span>,
                1,
                <span>Remove four <img src={images.mods.plus0} alt='+0' className='perk-icon' /> cards</span>,
                <span>Replace one <img src={images.mods.minus2} alt='-2' className='perk-icon' /> card with one <img src={images.mods.plus0} alt='+0' className='perk-icon' /> card</span>,
                <span>Replace one <img src={images.mods.minus1} alt='-1' className='perk-icon' /> card with one <img src={images.mods.plus1} alt='+1' className='perk-icon' /> card</span>,
                <span>Replace one <img src={images.mods.plus0} alt='+0' className='perk-icon' /> card with one <img src={images.mods.plus2} alt='+2' className='perk-icon' /> card</span>,
                1,
                <span>Add two <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> <img src={images.mods.plus1} alt='+1' className='perk-icon' /> cards</span>,
                1,
                <span>Add two <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> PIERCE <img src={images.effects.pierce} alt='PIERCE' className='perk-icon' /> 3 cards</span>,
                <span>Add two <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> POISON <img src={images.effects.poison} alt='POISON' className='perk-icon' /> cards</span>,
                1,
                <span>Add two <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> MUDDLE <img src={images.effects.muddle} alt='MUDDLE' className='perk-icon' /> cards</span>,
                <span>Add one <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> INVISIBLE <img src={images.effects.invisible} alt='INVISIBLE' className='perk-icon' /> card</span>,
                <span>Ignore negative scenario effects</span>,
            ]
        },
        {
            code: 'tinkerer',
            perks: [
                <span>Remove two <img src={images.mods.minus1} alt='-1' className='perk-icon' /> cards</span>,
                <span>Replace one <img src={images.mods.minus2} alt='-2' className='perk-icon' /> card with one <img src={images.mods.plus0} alt='+0' className='perk-icon' /> card</span>,
                <span>Add two <img src={images.mods.plus1} alt='+1' className='perk-icon' /> cards</span>,
                <span>Add one +3 card</span>,
                <span>Add two <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> <img src={images.elements.fire} alt='FIRE ELEMENT' className='perk-icon' /> cards</span>,
                <span>Add three <img src={images.effects.rolling} alt='rolling' className='perk-icon' /> MUDDLE <img src={images.effects.muddle} alt='MUDDLE' className='perk-icon' /> cards</span>,
                <span>Add one <img src={images.mods.plus1} alt='+1' className='perk-icon' /> WOUND <img src={images.effects.wound} alt='wound' className='perk-icon' /> card</span>,
                <span>Add one <img src={images.mods.plus1} alt='+1' className='perk-icon' /> IMMOBILIZE <img src={images.effects.immobilize} alt='IMMOBILIZE' className='perk-icon' /> card</span>,
                <span>Add one <img src={images.mods.plus1} alt='+1' className='perk-icon' /> HEAL <img src={images.effects.heal} alt='Heal' className='perk-icon' />2 card</span>,
                <span>Add one <img src={images.mods.plus0} alt='+0' className='perk-icon' /> ADD TARGET <img src={images.effects.target} alt='ADD TARGET' className='perk-icon' /> card</span>,
                <span>Ignore negative scenario effects</span>,
            ]
        }
    ]);
}

export default allPerks;