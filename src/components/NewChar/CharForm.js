import React from 'react';
import BrutePerks from './Perks/BrutePerks';
import CragheartPerks from './Perks/CragheartPerks';
import MindthiefPerks from './Perks/MindthiefPerks';
import ScoundrelPerks from './Perks/ScoundrelPerks';
import SpellweaverPerks from './Perks/SpellweaverPerks';
import TinkererPerks from './Perks/TinkererPerks';

class CharForm extends React.Component {

    generatePerksForm(charType) {
        if (charType === 'brute') {
            return <BrutePerks />
        } else if (charType === 'cragheart') {
            return <CragheartPerks />
        } else if (charType === 'mindthief') {
            return <MindthiefPerks />
        } else if (charType === 'spellweaver') {
            return <SpellweaverPerks />
        } else if (charType === 'scoundrel') {
            return <ScoundrelPerks />
        } else if (charType === 'tinkerer') {
            return <TinkererPerks />
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(e.target);
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
        const currentClassName = characterClasses[currentClassShort];
        const perks = this.generatePerksForm(currentClassShort);
    
        return (
            <section className='bodysection'>
                <form className='newsheet-form' onSubmit={this.handleSubmit}>
                    <h1>{currentClassName}</h1>

                    <fieldset>
                        <legend>Base Stats</legend>
                        <label>Name: 
                        <input placeholder='Joe Smith' type='text' name='character-name' id='character-name' required/>
                        </label>
                        <label>XP: 
                        <input placeholder='0' type='number' name='xp' id='xp' min='0' required />
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

                    {perks}

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

                    <div className="form-buttons">
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