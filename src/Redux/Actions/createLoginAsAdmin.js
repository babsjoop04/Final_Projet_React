import { LOGIN_AS_ADMIN } from "../Constants/Constants";

const createLoginAsAdmin = (payload) => {
    return {
        type: LOGIN_AS_ADMIN,
        payload: payload
    }
};

export default createLoginAsAdmin;