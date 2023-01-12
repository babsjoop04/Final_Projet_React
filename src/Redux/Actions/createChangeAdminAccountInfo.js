import { CHANGE_ADMIN_ACCOUNT_INFO } from "../Constants/Constants";

const createChangeAdminAccountInfo = (payload) => {
    return {
        type: CHANGE_ADMIN_ACCOUNT_INFO,
        payload: payload
    }
};

export default createChangeAdminAccountInfo;