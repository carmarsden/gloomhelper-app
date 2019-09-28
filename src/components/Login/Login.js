import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <form className='account-form'>
                <fieldset>
                    <legend>Log In</legend>
                    <label>Username
                        <input placeholder='username' type='text' name='username' id='username' />
                    </label>
                    <label>Password
                        <input placeholder='password' type="password" name='password' id='password' />
                    </label>
                    <div class="form-buttons">
                        <button type='button'>Cancel</button>
                        <button type='submit'>Log In</button>
                    </div>
                </fieldset>
            </form>    
        )
    }
}

export default Login;