import React from 'react';
import CharForm from './CharForm';

class NewChar extends React.Component {
    state = {
        charType: '',
    }

    charTypeRef = React.createRef();

    handleAddChar = e => {
        e.preventDefault();
        this.setState({
            charType: this.charTypeRef.current.value,
        })
    }

    render() {
        const charForm = this.state.charType ? <CharForm charType={this.state.charType} /> : ''

        return (
            <main role='main'>
                <section className='bodysection'>
                    <form className='newsheet-form' onSubmit={this.handleAddChar}>
                        <fieldset>
                            <legend>Choose Character</legend>
                            <label>Character Class: 
                                <select id='charclass' ref={this.charTypeRef} required>
                                    <option value=''>Choose class</option>
                                    <option value='brute'>Inox Brute</option>
                                    <option value='cragheart'>Savvas Cragheart</option>
                                    <option value='mindthief'>Vermling Mindthief</option>
                                    <option value='spellweaver'>Orchid Spellweaver</option>
                                    <option value='scoundrel'>Human Scoundrel</option>
                                    <option value='tinkerer'>Quatryl Tinkerer</option>
                                </select>
                            </label>
                            <div className='form-buttons'>
                                <button type='submit'>Add Character</button>
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