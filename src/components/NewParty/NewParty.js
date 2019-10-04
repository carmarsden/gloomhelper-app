import React from 'react';

class NewParty extends React.Component {
    state = {
        formFields: {
            party_name: '',
            location: '',
            reputation: '',
            price_mod: 0,
            party_notes: '',
            achievements: '',    
        },
        formErrors: {
            reputation: '',
        }
    };

    updatePriceModifier(rep) {
        rep = Number.parseInt(rep, 10);
        // price modifier is positive for reputations below -2
        const modIsPositive = (rep < -2) ? true : false;

        // price modifier is reputation / 4 and rounded. e.g. 2.75 - 3.5 becomes 3
        const base = Math.abs(rep / 4);
        let priceMod;
        // numbers up to x.5 get rounded down, above x.5 get rounded up
        if (base % 1 <= 0.5) {
            priceMod = Math.floor(base);
        } else {
            priceMod = Math.ceil(base)
        }

        // correct the sign if needed
        priceMod = modIsPositive ? `+${priceMod}` : -priceMod;

        this.setState({
            formFields: {
                ...this.state.formFields,
                price_mod: priceMod
            }
        })
    }

    handleInputChange = e => {
        const field = e.target.name;
        let value = e.target.value;

        this.setState({
            formFields: {
                ...this.state.formFields,
                [field]: value
            }
        }, () => {this.validateInputs(field, value)})
    }

    validateInputs(field, value) {
        const newErrors = {...this.state.formErrors};
        // validate for reputation
        if (field === 'reputation') {
            // convert to number to check
            value = Number(value);
            // must be integer -20 to +20
            if (!Number.isInteger(value) || value < -20 || value > 20) {
                newErrors.reputation = 'Reputation must be an integer from -20 to +20'
            } else {
                newErrors.reputation = '';
                this.updatePriceModifier(value);
            }
        }

        this.setState({
            formErrors: newErrors
        })
    }

    handleCancel = e => {
        this.props.history.goBack()
    }

    handleReset = e => {
        const blankForm = {
            party_name: '',
            location: '',
            reputation: '',
            price_mod: 0,
            party_notes: '',
            achievements: '',    
        }
        this.setState({
            formFields: blankForm
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        window.alert("This form currently doesn't go anywhere, but you submitted it!");
        this.handleReset(e);
    }

    render() {
        return (
            <main role='main'>
                <form className='newsheet-form' onSubmit={this.handleSubmit}>
                    <h1>New Party</h1>

                    <fieldset>
                        <legend>Base Stats</legend>
                        <label>Name*: 
                            <input 
                                placeholder='Gloomhaven Gangsters' 
                                type='text' 
                                name='party_name'
                                id='party_name' 
                                onChange={e => this.handleInputChange(e)}
                                value={this.state.formFields.party_name}
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
                                value={this.state.formFields.location}
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
                                value={this.state.formFields.reputation}
                                required 
                            />
                        </label>
                        <span>{this.state.formErrors.reputation}</span>
                        <p>Shop Price Modifier: {this.state.formFields.price_mod}</p>
                    </fieldset>

                    <fieldset>
                        <legend>Notes</legend>
                        <label>Notes: 
                            <textarea 
                                name='party_notes' 
                                id='party_notes' 
                                rows='5' 
                                cols='50'
                                onChange={e => this.handleInputChange(e)}
                                value={this.state.formFields.party_notes}
                            ></textarea>
                        </label>
                        <label>Achievements: 
                            <textarea 
                                name='achievements' 
                                id='achievements' 
                                rows='5' 
                                cols='50'
                                onChange={e => this.handleInputChange(e)}
                                value={this.state.formFields.achievements}
                            ></textarea>
                        </label>
                    </fieldset>

                    <div className="form-buttons">
                        <button type='button' onClick={this.handleCancel}>Cancel</button>
                        <button type='reset' onClick={this.handleReset}>Reset Form</button>
                        <button type='submit'>Save Party</button>
                    </div>
                </form>
            </main>
        )
    }
}

export default NewParty;