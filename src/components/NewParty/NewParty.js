import React from 'react';

class NewParty extends React.Component {
    state = {
        partyname: '',
        location: '',
        reputation: '',
        partynotes: '',
        achievements: '',
    };

    handleInputChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        this.setState({
            [field]: value
        })
    }

    handleCancel = e => {
        this.props.history.goBack()
    }

    handleReset = e => {
        Object.keys(this.state).map((key, idx) => this.setState({ [key]: '' }))
    }

    handleSubmit = e => {
        e.preventDefault();
        window.alert("This form currently doesn't go anywhere, but you submitted it!");
        this.handleReset(e);
    }

    render() {
        return (
            <main role='main'>
                <form className='newsheet-form'>
                    <h1>New Party</h1>

                    <fieldset>
                        <legend>Base Stats</legend>
                        <label>Name*: 
                            <input 
                                placeholder='Gloomhaven Gangsters' 
                                type='text' 
                                name='partyname'
                                id='partyname' 
                                onChange={e => this.handleInputChange(e)}
                                value={this.state.partyname}
                                required 
                            />
                        </label>
                        <label>Location: 
                            <input 
                                placeholder='Gloomhaven' 
                                type='text' 
                                name='location' 
                                id='location' 
                                onChange={e => this.handleInputChange(e)}
                                value={this.state.location}
                            />
                        </label>
                        <label>Reputation*: 
                            <input 
                                placeholder='0' 
                                type='number' 
                                min='-20' 
                                max='20' 
                                name='reputation' 
                                id='reputation' 
                                onChange={e => this.handleInputChange(e)}
                                value={this.state.reputation}
                                required 
                            />
                        </label>
                    </fieldset>

                    <fieldset>
                        <legend>Notes</legend>
                        <label>Notes: 
                            <textarea 
                                name='partynotes' 
                                id='partynotes' 
                                rows='5' 
                                cols='50'
                                onChange={e => this.handleInputChange(e)}
                                value={this.state.partynotes}
                            ></textarea>
                        </label>
                        <label>Achievements: 
                            <textarea 
                                name='achievements' 
                                id='achievements' 
                                rows='5' 
                                cols='50'
                                onChange={e => this.handleInputChange(e)}
                                value={this.state.achievements}
                            ></textarea>
                        </label>
                    </fieldset>

                    <div className="form-buttons">
                        <button type='button' onClick={this.handleCancel}>Cancel</button>
                        <button type='reset' onClick={this.handleReset}>Reset Form</button>
                        <button type='submit' onClick={this.handleSubmit}>Save Party</button>
                    </div>
                </form>
            </main>
        )
    }
}

export default NewParty;