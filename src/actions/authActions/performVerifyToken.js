import { VERIFY_TOKEN_SUCCESS } from '../types';

import { API_BASE_URL } from '../../config';

const API = API_BASE_URL;

const verifyTokenSuccess = (payload) => ({
    type: VERIFY_TOKEN_SUCCESS,
    payload,
});

const performVerifyToken = (token) => (dispatch) => {
    const url = API + '/auth/refresh';
    const payload = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    };

    return fetch(url, payload)
        .then((res) => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            } else if (res.status === 201) {
                return res.json();
            }
        })
        .then((res) => {
            const token = res.authToken;
            localStorage.setItem('localtoken', token);
            dispatch(verifyTokenSuccess(true));
        })
        .catch((err) => console.log(err));
};

export default performVerifyToken;