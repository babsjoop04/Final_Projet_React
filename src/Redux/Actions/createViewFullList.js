import { VIEW_FULL_PRODUCT_LIST } from "../Constants/Constants";

const createViewFullList = (payload) => {
    return {
        type: VIEW_FULL_PRODUCT_LIST,
        payload: payload
    }
};

export default createViewFullList;