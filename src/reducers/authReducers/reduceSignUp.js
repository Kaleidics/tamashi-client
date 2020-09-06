import { SIGN_UP_SUCCESS } from '../../actions/types';

const initialState = {
    signUpState: {
        success: false,
        username: null,
        password: null,
    }
};

const reduceSignUp = (state = initialState, action) => {
    console.log("reducer sign up", action.payload)
    switch (action.type) {
        case SIGN_UP_SUCCESS:
            return Object.assign({}, state, {
                signUpState: action.payload
            });
        default:
            return state;
    }
};

export default reduceSignUp;
