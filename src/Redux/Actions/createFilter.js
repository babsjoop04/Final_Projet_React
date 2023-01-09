import { FILTER_All_PRODUCTS_BY_PRICE_CATEGORY } from "../Constants/Constants";
const createFilter = (payload) => {
    return {
        type: FILTER_All_PRODUCTS_BY_PRICE_CATEGORY,
        payload: payload

    }
};

export default createFilter;