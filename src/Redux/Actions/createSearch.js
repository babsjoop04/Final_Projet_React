import { SEARCH } from "../Constants/Constants";

const createSearch = (payload) => {
    return {
        type: SEARCH,
        payload: payload
    }
};

export default createSearch;