import { ADD_TO_CARD } from "../Constants/Constants";

const createAddToCard = (payload) => {
    return {
        type: ADD_TO_CARD,
        payload: payload
    }
};

export default createAddToCard;