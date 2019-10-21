import React from 'react';
import BrutePerks from './Perks/BrutePerks';
import CragheartPerks from './Perks/CragheartPerks';
import MindthiefPerks from './Perks/MindthiefPerks';
import ScoundrelPerks from './Perks/ScoundrelPerks';
import SpellweaverPerks from './Perks/SpellweaverPerks';
import TinkererPerks from './Perks/TinkererPerks';
import CHARCLASSES from '../../data/charclasses';

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
        const currentClassName = CHARCLASSES.find(item => item.code === this.props.charType).name;
        const perks = this.generatePerksForm(this.props.charType);
    
        return (
            <section className='bodysection'>
                <form className='newsheet-form' onSubmit={this.props.handleSubmit}>
                    <h1>{currentClassName}</h1>

                    <fieldset>
                        <legend>Base Stats</legend>
                        <label>Name*: 
                            <input 
                                placeholder='Joe Smith' 
                                type='text' 
                                name='character_name' 
                                id='character_name' 
                                maxLength='50'
                                required
                            />
                        </label>
                        <label>XP*: 
                            <input 
                                placeholder='0' 
                                type='number' 
                                name='xp' 
                                id='xp' 
                                min='0' 
                                max='10000'
                                onChange={e => this.updateXp(e.target.value)}
                                required />
                        </label>
                        <span>{this.state.xpError}</span>
                        <p>Level: {this.state.level}</p>
                    </fieldset>

                    <fieldset>
                        <legend>Notes</legend>
                        <label>Gold Notes: 
                            <textarea name='gold_notes' id='gold_notes' rows='3' cols='50'></textarea>
                        </label>
                        <label>Items: 
                            <textarea name='items_notes' id='items_notes' rows='5' cols='50'></textarea>
                        </label>
                        <label>General Notes: 
                            <textarea name='character_notes' id='character_notes' rows='5' cols='50'></textarea>
                        </label>
                    </fieldset>

                    {perks}

                    <fieldset id='goals-fieldset'>
                        <legend>Battle Goals</legend>
                        <div id='goals-wrapper'>
                            <div> 
                                <label htmlFor='goals_check_1_1'>√: </label>
                                <label htmlFor='goals_check_1_2' className='screenreader-only'>(check two of three)</label>
                                <label htmlFor='goals_check_1_3' className='screenreader-only'>(check three of three)</label>
                                <input type='checkbox' id='goals_check_1_1' name='goals_check_1_1' />
                                <input type='checkbox' id='goals_check_1_2' name='goals_check_1_2' />
                                <input type='checkbox' id='goals_check_1_3' name='goals_check_1_3' />
                            </div>
                            <div>
                                <label htmlFor='goals_check_2_1'>√: </label>
                                <label htmlFor='goals_check_2_2' className='screenreader-only'>(check two of three)</label>
                                <label htmlFor='goals_check_2_3' className='screenreader-only'>(check three of three)</label>
                                <input type='checkbox' id='goals_check_2_1' name='goals_check_2_1' />
                                <input type='checkbox' id='goals_check_2_2' name='goals_check_2_2' />
                                <input type='checkbox' id='goals_check_2_3' name='goals_check_2_3' />
                            </div>
                            <div>
                                <label htmlFor='goals_check_3_1'>√: </label>
                                <label htmlFor='goals_check_3_2' className='screenreader-only'>(check two of three)</label>
                                <label htmlFor='goals_check_3_3' className='screenreader-only'>(check three of three)</label>
                                <input type='checkbox' id='goals_check_3_1' name='goals_check_3_1' />
                                <input type='checkbox' id='goals_check_3_2' name='goals_check_3_2' />
                                <input type='checkbox' id='goals_check_3_3' name='goals_check_3_3' />
                            </div>
                            <div>
                                <label htmlFor='goals_check_4_1'>√: </label>
                                <label htmlFor='goals_check_4_2' className='screenreader-only'>(check two of three)</label>
                                <label htmlFor='goals_check_4_3' className='screenreader-only'>(check three of three)</label>
                                <input type='checkbox' id='goals_check_4_1' name='goals_check_4_1' />
                                <input type='checkbox' id='goals_check_4_2' name='goals_check_4_2' />
                                <input type='checkbox' id='goals_check_4_3' name='goals_check_4_3' />
                            </div>
                            <div>
                                <label htmlFor='goals_check_5_1'>√: </label>
                                <label htmlFor='goals_check_5_2' className='screenreader-only'>(check two of three)</label>
                                <label htmlFor='goals_check_5_3' className='screenreader-only'>(check three of three)</label>
                                <input type='checkbox' id='goals_check_5_1' name='goals_check_5_1' />
                                <input type='checkbox' id='goals_check_5_2' name='goals_check_5_2' />
                                <input type='checkbox' id='goals_check_5_3' name='goals_check_5_3' />
                            </div>
                            <div>
                                <label htmlFor='goals_check_6_1'>√: </label>
                                <label htmlFor='goals_check_6_2' className='screenreader-only'>(check two of three)</label>
                                <label htmlFor='goals_check_6_3' className='screenreader-only'>(check three of three)</label>
                                <input type='checkbox' id='goals_check_6_1' name='goals_check_6_1' />
                                <input type='checkbox' id='goals_check_6_2' name='goals_check_6_2' />
                                <input type='checkbox' id='goals_check_6_3' name='goals_check_6_3' />
                            </div>
                        </div>
                    </fieldset>

                    <div className="form-buttons">
                        <button type='button' onClick={this.props.handleCancel}>Cancel</button>
                        <button type='reset' onClick={this.props.handleReset}>Reset Form</button>
                        <button type='submit'>Save Character</button>
                    </div>
                </form>
                <p className='form-error'>{this.props.formError}</p>
            </section>
        )
    }
}

export default CharForm;