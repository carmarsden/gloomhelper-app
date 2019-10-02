import React from 'react';
import { Link } from 'react-router-dom';

class CreateAccount extends React.Component {
    render() {
        return (
            <form className='account-form'>
                <fieldset>
                    <legend>Create Account</legend>
                    <label>Username
                        <input placeholder='username' type='text' name='username' id='username' />
                    </label>
                    <label>Password
                        <input placeholder='password' type="password" name='password' id='password' />
                    </label>
                    <label>Confirm Password
                        <input placeholder='confirm password' type="password" name='confirmpassword' id='confirmpassword' />
                    </label>
                    <div className="form-buttons">
                        <button type='button' onClick={this.props.handleCloseModal}>Cancel</button>
                        <button type='submit'>Create Account</button>
                    </div>
                </fieldset>
                <p>Already have an account? <Link to='#' onClick={() => this.props.handleOpenModal('login')}>Log In</Link></p>
            </form>    
        )
    }
}

export default CreateAccount;