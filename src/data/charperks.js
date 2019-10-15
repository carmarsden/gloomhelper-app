// number x means that perk is the same as the perk x prior
// all perks arrays should have 15 items total

const CHARPERKS = [
    {
        code: 'brute',
        perks: [
            'Remove two -1 cards',
            'Replace one -1 card with one +1 card',
            'Add two +1 cards',
            1,
            'Add one +3 card',
            'Add three PUSH 1 cards',
            1,
            'Add two PIERCE 3 cards',
            'Add one STUN card',
            1,
            'Add one DISARM card and one MUDDLE card',
            'Add one ADD TARGET card',
            1,
            'Add one +1 SHIELD 1 Self card',
            'Ignore negative item effects and add one +1 card',
        ]
    },
    {
        code: 'cragheart',
        perks: [
            'Remove four +0 cards',
            'Replace one -1 card with one +1 card',
            1,
            2,
            'Add one -2 card and two +2 cards',
            'Add one +1 IMMOBILIZE card',
            1,
            'Add one +2 MUDDLE card',
            1,
            'Add two PUSH 2 cards',
            'Add two EARTH ELEMENT cards',
            1,
            'Add two AIR ELEMENT cards',
            'Ignore negative item effects',
            'Ignore negative scenario effects'
        ]
    },
    {
        code: 'mindthief',
        perks: [
            'Remove two -1 cards',
            1,
            'Remove four +0 cards',
            'Replace two +1 cards with two +2 cards',
            'Replace one -2 card with one +0 card',
            'Add one +2 ICE ELEMENT card',
            1,
            'Add two +1 cards',
            1,
            'Add three PULL 1 cards',
            'Add three MUDDLE cards',
            'Add two IMMOBILIZE cards',
            'Add one STUN card',
            'Add one DISARM card and one MUDDLE card',
            'Ignore negative scenario effects'
        ]
    },
    {
        code: 'spellweaver',
        perks: [
            'Remove four +0 cards',
            'Replace one -1 card with one +1 card',
            1,
            'Add two +1 cards',
            1,
            'Add one +0 STUN card',
            'Add one +1 WOUND card',
            'Add one +1 IMMOBILIZE card',
            'Add one +1 CURSE card',
            'Add one +2 FIRE ELEMENT card',
            1,
            'Add one +2 ICE ELEMENT card',
            1,
            'Add one EARTH ELEMENT and one AIR ELEMENT card',
            'Add one LIGHT ELEMENT and one DARK ELEMENT card'
        ]
    },
    {
        code: 'scoundrel',
        perks: [
            'Remove two -1 cards',
            1,
            'Remove four +0 cards',
            'Replace one -2 card with one +0 card',
            'Replace one -1 card with one +1 card',
            'Replace one +0 card with one +2 card',
            1,
            'Add two +1 cards',
            1,
            'Add two PIERCE 3 cards',
            'Add two POISON cards',
            1,
            'Add two MUDDLE cards',
            'Add one INVISIBLE card',
            'Ignore negative scenario effects'
        ]
    },
    {
        code: 'tinkerer',
        perks: [
            'Remove two -1 cards',
            'Replace one -2 card with one +0 card',
            'Add two +1 cards',
            'Add one +3 card',
            'Add two FIRE ELEMENT cards',
            'Add three MUDDLE cards',
            'Add one +1 WOUND card',
            'Add one +1 IMMOBILIZE card',
            'Add one +1 HEAL 2 card',
            'Add one +0 ADD TARGET card',
            'Ignore negative scenario effects'
        ]
    }
];

export default CHARPERKS;