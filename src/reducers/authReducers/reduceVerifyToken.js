import { VERIFY_TOKEN_SUCCESS } from '../../actions/types';

const initialState = {
    auth: false,
};

const reduceVerifyToken = (state = initialState, action) => {
    switch (action.type) {
        case VERIFY_TOKEN_SUCCESS:
            return Object.assign({}, state, {
                auth: action.payload,
            });
        default:
            return state;
    }
};

export default reduceVerifyToken;