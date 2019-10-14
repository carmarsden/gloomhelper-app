import config from '../config';

const AccountService = {
    login(credentials) {
        return fetch(`${config.API_BASE_URL}/users/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then(res => (res.ok) ? res.json() : res.json().then(e => Promise.reject(e)))
    },

    register(user) {
        return fetch(`${config.API_BASE_URL}/users/register`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        .then(res => (res.ok) ? res.json() : res.json().then(e => Promise.reject(e)))
    }
};

export default AccountService;