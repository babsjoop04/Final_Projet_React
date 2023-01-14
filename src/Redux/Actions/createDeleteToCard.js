import { DELETE_TO_CARD } from "../Constants/Constants";

const createDeleteToCard = (payload) => {
    return {
        type: DELETE_TO_CARD,
        payload: payload
    }
};

export default createDeleteToCard;