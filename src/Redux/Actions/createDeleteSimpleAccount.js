import { DELETE_SIMPLE_ACCOUNT } from "../Constants/Constants";

const createDeleteSimpleAccount = (payload) => {
    return {
        type: DELETE_SIMPLE_ACCOUNT,
        payload: payload
    }
};

export default createDeleteSimpleAccount;