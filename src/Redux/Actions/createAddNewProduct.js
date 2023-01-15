import { ADD_NEW_PRODUCT } from "../Constants/Constants";

const createAddNewProduct = (payload) => {
    return {
        type: ADD_NEW_PRODUCT,
        payload: payload
    }
};

export default createAddNewProduct;