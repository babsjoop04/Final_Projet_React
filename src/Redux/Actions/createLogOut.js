import { LOG_OUT } from "../Constants/Constants";

const createLogOut = (payload) => {
    return {
        type: LOG_OUT,
        payload: payload
    }
};

export default createLogOut;