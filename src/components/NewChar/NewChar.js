import React from 'react';
import AccountContext from '../../AccountContext';
import EntriesService from '../../services/entries-service';
import CHARCLASSES from '../../data/charclasses';
import CharForm from './CharForm';

class NewChar extends React.Component {
    static contextType = AccountContext;

    state = {
        charType: '',
        formError: '',
    }

    charTypeRef = React.createRef();

    generateCharObj = form => {
        // massage newChar object for submission
        const { character_name, xp, gold_notes, items_notes, character_notes } = form;
        const newChar = {
            character_name: character_name.value,
            character_class: this.state.charType,
            xp: Number(xp.value),
            gold_notes: gold_notes.value,
            items_notes: items_notes.value,
            character_notes: character_notes.value,
        };
        newChar.date_modified = new Date();

        // goals should be the number of checked boxes in that goalset (0 - 3)
        newChar.goals_1 = [form.goals_check_1_1.checked, form.goals_check_1_2.checked, form.goals_check_1_3.checked].filter(Boolean).length;
        newChar.goals_2 = [form.goals_check_2_1.checked, form.goals_check_2_2.checked, form.goals_check_2_3.checked].filter(Boolean).length;
        newChar.goals_3 = [form.goals_check_3_1.checked, form.goals_check_3_2.checked, form.goals_check_3_3.checked].filter(Boolean).length;
        newChar.goals_4 = [form.goals_check_4_1.checked, form.goals_check_4_2.checked, form.goals_check_4_3.checked].filter(Boolean).length;
        newChar.goals_5 = [form.goals_check_5_1.checked, form.goals_check_5_2.checked, form.goals_check_5_3.checked].filter(Boolean).length;
        newChar.goals_6 = [form.goals_check_6_1.checked, form.goals_check_6_2.checked, form.goals_check_6_3.checked].filter(Boolean).length;

        // char perks are located at form items 8 - 22
        // char perks is a string of 15 0's & 1's corresponding to whether perks are checked
        let perksStr = '';
        for (let i = 8; i < 23; i++) {
            perksStr += form[i].checked ? '1' : '0';
        }
        newChar.perks = perksStr;

        return newChar;
    }

    handleAddChar = e => {
        e.preventDefault();
        this.setState({
            charType: this.charTypeRef.current.value,
        })
    }

    handleCancel = e => {
        if (this.context.loggedIn) {
            this.props.history.push('/dashboard')
        } else {
            this.props.history.push('/')
        }
    }

    handleReset = e => {
        this.setState({ formError: '' })
    }

    handleSubmit = e => {
        e.preventDefault();

        if (!this.context.loggedIn) {
            this.context.promptLogin();
            return;
        }

        const newChar = this.generateCharObj(e.target);
        console.log(newChar);

        // post newChar
        EntriesService.postChar(newChar)
        .then(char => {
            window.alert('Character successfully added!');
            this.props.history.push('/dashboard');
        })
        .catch(res => {
            const errorText = res.error ? res.error : 'Something went wrong! Please try again later.';
            this.setState({ formError: errorText });
        })
    }

    render() {
        const charForm = this.state.charType ? <CharForm 
            charType={this.state.charType} 
            handleCancel={this.handleCancel} 
            handleReset={this.handleReset}
            handleSubmit={this.handleSubmit}
            formError={this.state.formError}
            /> : ''
        ;

        const classOptions = [];
        CHARCLASSES.forEach((classType, i) => {
            classOptions.push(<option value={classType.code} key={i}>{classType.name}</option>)
        });

        return (
            <main role='main'>
                <section className='bodysection'>
                    <form className='newsheet-form' onSubmit={this.handleAddChar}>
                        <fieldset>
                            <legend>Select Character Class</legend>
                            <label>Classes: 
                                <select id='character_class' ref={this.charTypeRef} required>
                                    <option value=''>Choose class</option>
                                    {classOptions}
                                </select>
                            </label>
                            <div className='form-buttons'>
                                <button type='submit'>Start Character</button>
                            </div>
                        </fieldset>
                    </form>
                </section>

                {charForm}
            </main>
        )
    }
}

export default NewChar;