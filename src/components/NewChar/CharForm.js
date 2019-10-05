import React from 'react';
import BrutePerks from './Perks/BrutePerks';
import CragheartPerks from './Perks/CragheartPerks';
import MindthiefPerks from './Perks/MindthiefPerks';
import ScoundrelPerks from './Perks/ScoundrelPerks';
import SpellweaverPerks from './Perks/SpellweaverPerks';
import TinkererPerks from './Perks/TinkererPerks';

class CharForm extends React.Component {
    state = {
        xpError: '',
        level: 0,
    }

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

    updateXp(xp) {
        xp = Number.parseFloat(xp);
        let xpError = '';

        if (Number.isNaN(xp) || !Number.isInteger(xp)) {
            xpError = 'XP must be an integer'
        } else {
            xpError = '';
        }

        this.setState({ xpError }, this.updateLevel(xp))
    }

    updateLevel(xp) {
        xp = Number.parseInt(xp, 10);
        let level;
        if (xp < 0) {
            level = 'Error: cannot have XP less than 0';
        } else if (xp < 45) {
            level = 1;
        } else if (xp < 95) {
            level = 2;
        } else if (xp < 150) {
            level = 3;
        } else if (xp < 210) {
            level = 4;
        } else if (xp < 275) {
            level = 5;
        } else if (xp < 345) {
            level = 6;
        } else if (xp < 420) {
            level = 7;
        } else if (xp < 500) {
            level = 8;
        } else if (xp >= 500) {
            level = 9;
        } else {
            level = 0;
        }

        this.setState({ level });
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
                <form className='newsheet-form' onSubmit={this.props.handleSubmit}>
                    <h1>{currentClassName}</h1>

                    <fieldset>
                        <legend>Base Stats</legend>
                        <label>Name*: 
                            <input placeholder='Joe Smith' type='text' name='character-name' id='character-name' required/>
                        </label>
                        <label>XP*: 
                            <input 
                                placeholder='0' 
                                type='number' 
                                name='xp' 
                                id='xp' 
                                min='0' 
                                onChange={e => this.updateXp(e.target.value)}
                                required />
                        </label>
                        <span>{this.state.xpError}</span>
                        <p>Level: {this.state.level}</p>
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
                        <button type='button' onClick={this.props.handleCancel}>Cancel</button>
                        <button type='reset'>Reset Form</button>
                        <button type='submit'>Save Character</button>
                    </div>
                </form>
            </section>
        )
    }
}

export default CharForm;