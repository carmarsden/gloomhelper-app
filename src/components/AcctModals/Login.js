import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    generateLoginError() {
        if (this.props.loginError) {
            return <p className='form-error'>{this.props.loginError}</p>;
        } else {
            return '';
        }
    }

    render() {
        const loginError = this.generateLoginError();
        return (
            <form className='account-form' onSubmit={this.props.handleLogin}>
                {loginError}
                <p className='modal-message'>{this.props.modalMessage}</p>
                <fieldset>
                    <legend>Log In</legend>
                    <label>Username
                        <input placeholder='username' type='text' name='username' id='username' required />
                    </label>
                    <label>Password
                        <input placeholder='password' type="password" name='password' id='password' required />
                    </label>
                    <div className="form-buttons">
                        <button type='button' onClick={this.props.handleCloseModal}>Cancel</button>
                        <button type='submit'>Log In</button>
                    </div>
                </fieldset>
                <p>New User? <Link to='#' onClick={() => this.props.handleOpenModal('createacct', this.props.modalMessage)}>Create Account</Link></p>
            </form>    
        )
    }
}

export default Login;