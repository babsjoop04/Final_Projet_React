import { CREATE_NEW_ACCOUNT } from "../Constants/Constants";

const createCreateNewAccount = (payload) => {
    return {
        type: CREATE_NEW_ACCOUNT,
        payload: payload
    }
};

export default createCreateNewAccount;