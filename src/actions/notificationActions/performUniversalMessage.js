import { UNIVERSAL_MESSAGE } from '../types';

const performUniversalMessage = (msg, status) => ({
    type: UNIVERSAL_MESSAGE,
    msg,
    color: status,
});

export default performUniversalMessage;