import { UNIVERSAL_MESSAGE } from '../../actions/types';

const initialState = {
    universalMessage: null,
    universalMessageState: null,
};

const reduceUniversalMessage = (state = initialState, action) => {
    switch (action.type) {
        case UNIVERSAL_MESSAGE:
            return Object.assign({}, state, {
                universalMessage: action.msg,
                universalMessageState: action.color,
            });
        default:
            return state;
    }
};

export default reduceUniversalMessage;
