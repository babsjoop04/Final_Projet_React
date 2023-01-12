import { DELETE_ADMIN_ACCOUNT } from "../Constants/Constants";

const createDeleteAdminAccount = (payload) => {
    return {
        type: DELETE_ADMIN_ACCOUNT,
        payload: payload
    }

};

export default createDeleteAdminAccount;