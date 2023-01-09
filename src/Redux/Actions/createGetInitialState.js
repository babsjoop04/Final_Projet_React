import { GET_INITIAL_STATE } from "../Constants/Constants";
const createGetInitialState = (payload) => {
    return {
        type: GET_INITIAL_STATE,
        payload: payload

    }
};

export default createGetInitialState;