import { SIGN_IN_SUCCESS } from '../../actions/types';
import { SIGN_OUT_SUCCESS } from '../../actions/types';


const initialState = {
  auth: false
};

const reduceAuthStatus = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_SUCCESS:
            return Object.assign({}, state, {
                auth: action.payload
            });
        case SIGN_OUT_SUCCESS:
            return Object.assign({}, state, {
                auth: action.payload
            });
        default:
            return state;
    }
};

export default reduceAuthStatus;
