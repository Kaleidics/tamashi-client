import { SIGN_OUT_SUCCESS } from '../types';

const signOutSuccess = (payload) => ({
    type: SIGN_OUT_SUCCESS,
    payload,
});

const performSignOut = () => (dispatch) => {
    console.log("trigger signout")
    localStorage.removeItem('localtoken');
    localStorage.removeItem('authedUser');
    dispatch(signOutSuccess(false));
};

export default performSignOut;