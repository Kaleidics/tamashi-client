import { SIGN_UP_SUCCESS } from '../types';

import { API_BASE_URL } from '../../config';
import sleeper from '../../helpers/Sleeper';

import performUniversalMessage from '../notificationActions/performUniversalMessage';

const API = API_BASE_URL;

export const signUpSuccess = (payload) => ({
    type: SIGN_UP_SUCCESS,
    payload,
});

const performSignUp = (credentials) => (dispatch) => {
    const url = API + '/users/signup';
    const payload = {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
            'Content-Type': 'application/json',
        },
    };

    return fetch(url, payload)
        .then((res) => {
            if (!res.ok) {
                return res
                    .json()
                    .then((res) => dispatch(performUniversalMessage(res.message, 'failed')))
                    .then(sleeper(2500))
                    .then(() => dispatch(performUniversalMessage('', '')))
                    .catch((err) => console.log(err));
            }

            if (res.status === 201) {
                console.log('trigger true for signup');
                dispatch(
                    signUpSuccess({
                        success: true,
                        username: credentials.username,
                        password: credentials.password,
                    })
                );
            } else {
                return res
                    .json()
                    .then((res) => {
                        console.log('error', res);
                    })
                    .catch((err) => console.log('2error', err));
            }
        })
        .catch((err) => console.log('1 error', err));
};

export default performSignUp;
