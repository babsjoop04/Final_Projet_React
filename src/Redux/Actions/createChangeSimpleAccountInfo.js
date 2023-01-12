import { CHANGE_SIMPLE_ACCOUNT_INFO } from "../Constants/Constants";

const createChangeSimpleAccountInfo = (payload) => {
    return {
        type: CHANGE_SIMPLE_ACCOUNT_INFO,
        payload: payload
    }
};

export default createChangeSimpleAccountInfo;