import { LOGIN_AS_SIMPLE_USER } from "../Constants/Constants";

const createLoginAsSimpleUser = (payload) => {
    return {
        type: LOGIN_AS_SIMPLE_USER,
        payload: payload
    }
}
export default createLoginAsSimpleUser;