import React from 'react';
import { Link } from 'react-router-dom';

class CreateAccount extends React.Component {
    render() {
        return (
            <form className='account-form' onSubmit={this.props.handleCreateAccount}>
                <fieldset>
                    <legend>Create Account</legend>
                    <label>Username
                        <input 
                            placeholder='username' 
                            type='text' 
                            name='username' 
                            id='username' 
                            required 
                        />
                    </label>
                    <label>Password
                        <input 
                            placeholder='password' 
                            type="password" 
                            name='password' 
                            id='password' 
                            required 
                        />
                    </label>
                    <label>Confirm Password
                        <input 
                            placeholder='confirm password' 
                            type="password" 
                            name='confirmpassword' 
                            id='confirmpassword' 
                            required 
                        />
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