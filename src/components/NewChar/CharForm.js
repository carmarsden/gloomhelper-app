import React from 'react';

class CharForm extends React.Component {

    generatePerksForm(charType) {
        return 'hello';
    }

    render() {
        const characterClasses = {
            brute: 'Inox Brute',
            cragheart: 'Savvas Cragheart',
            mindthief: 'Vermling Mindthief',
            spellweaver: 'Orchid Spellweaver',
            scoundrel: 'Human Scoundrel',
            tinkerer: 'Quatryl Tinkerer',
        }
        const currentClassShort = this.props.charType;
        const currentClassName = characterClasses[currentClassShort]
    
        return (
            <section className='bodysection'>
                <form class='newsheet-form'>
                    <h1>{currentClassName}</h1>

                    <fieldset>
                        <legend>Base Stats</legend>
                        <label>Name: 
                        <input placeholder='Joe Smith' type='text' name='character-name' id='character-name' />
                        </label>
                        <label>XP: 
                        <input placeholder='0' type='number' name='xp' id='xp' />
                        </label>
                    </fieldset>

                    <fieldset>
                        <legend>Notes</legend>
                        <label>Gold Notes: 
                            <textarea name='gold-notes' id='gold-notes' rows='3' cols='50'></textarea>
                        </label>
                        <label>Items: 
                            <textarea name='items-notes' id='items-notes' rows='5' cols='50'></textarea>
                        </label>
                        <label>General Notes: 
                            <textarea name='character-notes' id='character-notes' rows='5' cols='50'></textarea>
                        </label>
                    </fieldset>

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

                    <fieldset>
                        <legend>Battle Goals</legend>
                        <label> √: 
                        <input type='checkbox' id='goals-check-1-1' name='goals-check-1-1' />
                        <input type='checkbox' id='goals-check-1-2' name='goals-check-1-2' />
                        <input type='checkbox' id='goals-check-1-3' name='goals-check-1-3' />
                        </label>
                        <label> √: 
                        <input type='checkbox' id='goals-check-2-1' name='goals-check-2-1' />
                        <input type='checkbox' id='goals-check-2-2' name='goals-check-2-2' />
                        <input type='checkbox' id='goals-check-2-3' name='goals-check-2-3' />
                        </label>
                        <label> √: 
                        <input type='checkbox' id='goals-check-3-1' name='goals-check-3-1' />
                        <input type='checkbox' id='goals-check-3-2' name='goals-check-3-2' />
                        <input type='checkbox' id='goals-check-3-3' name='goals-check-3-3' />
                        </label>
                        <label> √: 
                        <input type='checkbox' id='goals-check-4-1' name='goals-check-4-1' />
                        <input type='checkbox' id='goals-check-4-2' name='goals-check-4-2' />
                        <input type='checkbox' id='goals-check-4-3' name='goals-check-4-3' />
                        </label>
                        <label> √: 
                        <input type='checkbox' id='goals-check-5-1' name='goals-check-5-1' />
                        <input type='checkbox' id='goals-check-5-2' name='goals-check-5-2' />
                        <input type='checkbox' id='goals-check-5-3' name='goals-check-5-3' />
                        </label>
                        <label> √: 
                        <input type='checkbox' id='goals-check-6-1' name='goals-check-6-1' />
                        <input type='checkbox' id='goals-check-6-2' name='goals-check-6-2' />
                        <input type='checkbox' id='goals-check-6-3' name='goals-check-6-3' />
                        </label>
                    </fieldset>

                    <div class="form-buttons">
                        <button type='button'>Cancel</button>
                        <button type='button'>Reset Form</button>
                        <button type='submit'>Save Character</button>
                    </div>
                </form>
            </section>
        )
    }
}

export default CharForm;