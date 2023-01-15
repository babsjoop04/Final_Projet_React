import { DELETE_ALL_PRODUCTS_OF_CATEGORY } from "../Constants/Constants";

const createDeleteAllProductsOfCategory = (payload) => {
    return {
        type: DELETE_ALL_PRODUCTS_OF_CATEGORY,
        payload: payload
    }
};

export default createDeleteAllProductsOfCategory;