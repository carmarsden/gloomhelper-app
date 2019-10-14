import React from 'react';
import { Link } from 'react-router-dom';

class CreateAccount extends React.Component {
    state = {
        username: '',
        password: '',
        confirmPassword: '',
        formErrors: {
            username: '',
            password: '',
            confirmPassword: '',
            usernameValid: false,
            passwordValid: false,
            confirmPasswordValid: false,
        },
        formValid: false,
    }

    handleInputChange = e => {
        const field = e.target.name;
        let value = e.target.value;

        this.setState({
            [field]: value
        }, () => {this.validateInputs(field, value)})
    }

    validateInputs(field, value) {
        const newErrors = this.state.formErrors;
        const VALID_PW_REGEX = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!_@#$%^&])[\S]+/;

        // validate for username
        if (field === 'username') {
            if (value.length === 0) {
                newErrors.username = 'Username is required';
                newErrors.usernameValid = false;
            } else if (value.length < 4) {
                newErrors.username = 'Username must be more than 3 characters';
                newErrors.usernameValid = false;
            } else  {
                newErrors.username = '';
                newErrors.usernameValid = true;
            }
        }

        // validate for password
        if (field === 'password') {
            if (value.length < 8) {
                newErrors.password = 'Password must be at least 8 characters';
                newErrors.passwordValid = false;
            } else if (value.length > 72) {
                newErrors.password = 'Password must be no more than 72 characters';
                newErrors.passwordValid = false;
            } else if (value.startsWith(' ') || value.endsWith(' ')) {
                newErrors.password = 'Password cannot start or end with empty spaces';
                newErrors.passwordValid = false;
            } else if (!VALID_PW_REGEX.test(value)) {
                newErrors.password = 'Password must contain at least one each of: upper case, lower case, number, and special character';
                newErrors.passwordValid = false;
            } else {
                newErrors.password = '';
                newErrors.passwordValid = true;
            }
        }

        // validate for password confirmation
        if (field === 'confirmPassword') {
            if (value !== this.state.password) {
                newErrors.confirmPassword = 'Must match password';
                newErrors.confirmPasswordValid = false;
            } else {
                newErrors.confirmPassword = '';
                newErrors.confirmPasswordValid = true;
            }
        }

        this.setState({
            formErrors: newErrors
        }, this.validateForm)
    }

    validateForm() {
        this.setState({
            formValid: this.state.formErrors.usernameValid && this.state.formErrors.passwordValid && this.state.formErrors.confirmPasswordValid,
        })
    }

    generateRegisterError() {
        if (this.props.registerError) {
            return <p className='form-error'>{this.props.registerError}</p>;
        } else {
            return '';
        }
    }

    render() {
        const registerError = this.generateRegisterError();
        return (
            <form className='account-form' onSubmit={this.props.handleCreateAccount}>
                {registerError}
                <fieldset>
                    <legend>Create Account</legend>
                    <label>Username
                        <input 
                            placeholder='username' 
                            type='text' 
                            name='username' 
                            id='username' 
                            onChange={e => this.handleInputChange(e)}
                            value={this.state.username}
                            required 
                        />                        
                    </label>
                    <span className='form-error'>{this.state.formErrors.username}</span>
                    <label>Password
                        <input 
                            placeholder='password' 
                            type="password" 
                            name='password' 
                            id='password' 
                            onChange={e => this.handleInputChange(e)}
                            value={this.state.password}
                            required 
                        />
                    </label>
                    <span className='form-error'>{this.state.formErrors.password}</span>
                    <label>Confirm Password
                        <input 
                            placeholder='confirm password' 
                            type="password" 
                            name='confirmPassword' 
                            id='confirmPassword' 
                            onChange={e => this.handleInputChange(e)}
                            value={this.state.confirmPassword}
                            required 
                        />
                    </label>
                    <span className='form-error'>{this.state.formErrors.confirmPassword}</span>
                    <div className="form-buttons">
                        <button type='button' onClick={this.props.handleCloseModal}>Cancel</button>
                        <button type='submit' disabled={!this.state.formValid}>Create Account</button>
                    </div>
                </fieldset>
                <p>Already have an account? <Link to='#' onClick={() => this.props.handleOpenModal('login')}>Log In</Link></p>
            </form>    
        )
    }
}

export default CreateAccount;