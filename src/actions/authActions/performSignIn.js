import { SIGN_IN_SUCCESS } from '../types';

import { API_BASE_URL } from '../../config';

import performUniversalMessage from '../notificationActions/performUniversalMessage'

const API = API_BASE_URL;

const signInSuccess = (payload) => ({
    type: SIGN_IN_SUCCESS,
    payload,
});

const performSignIn = (credentials) => (dispatch) => {
    const url = API + '/auth/signin';

    const payload = {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
            'Content-Type': 'application/json',
        },
    };

    return fetch(url, payload)
        .then((res) => {
            if ((!res.ok && res.status === 401) || res.status != 200) {
                console.log("triggered a 401")
                dispatch(
                    performUniversalMessage({ heading: 'Warning', desc: 'Wrong Username or Password!' }, 'failed')
                );
            } else {
                dispatch(performUniversalMessage('', ''));
            }
            return res.json();
        })
        .then((res) => {
            const token = res.authtoken;
            const userID = res.userid;
            localStorage.setItem('localtoken', token);
            localStorage.setItem('authedUser', userID);
        })
        .then(() => {
            if (localStorage.getItem('localtoken') && localStorage.getItem('authedUser')) {
                dispatch(signInSuccess(true));
            }
        })
        .catch((err) => {
            setTimeout(function () {
                //dispatch(performUniversalMessage('', ''));
            }, 2500);
            console.log('');
        });
};

export default performSignIn;