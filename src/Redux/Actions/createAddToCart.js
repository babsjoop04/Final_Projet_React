import { ADD_TO_CART } from "../Constants/Constants";

const createAddToCart = (payload) => {
    return {
        type: ADD_TO_CART,
        payload: payload
    }
};

export default createAddToCart;