import config from '../config';
import TokenService from './token-service';

const EntriesService = {
    getEntries() {
        return fetch(`${config.API_BASE_URL}/entries`, {
            method: 'GET',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res => (res.ok) ? res.json() : res.json().then(e => Promise.reject(e)))
    },

    postParty(party) {
        return fetch(`${config.API_BASE_URL}/entries/parties`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(party)
        })
        .then(res => (res.ok) ? res.json() : res.json().then(e => Promise.reject(e)))
    },

    postChar(char) {
        return fetch(`${config.API_BASE_URL}/entries/characters`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(char)
        })
        .then(res => (res.ok) ? res.json() : res.json().then(e => Promise.reject(e)))
    }
}

export default EntriesService;