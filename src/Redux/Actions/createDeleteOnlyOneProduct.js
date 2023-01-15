import { DELETE_ONLY_ONE_PRODUCT } from "../Constants/Constants";

const createDeleteOnlyOneProduct = (payload) => {
    return {
        type: DELETE_ONLY_ONE_PRODUCT,
        payload: payload
    }
};

export default createDeleteOnlyOneProduct;