import { COMMAND } from "../Constants/Constants";

const createCommand = (payload) => {
    return {
        type: COMMAND,
        payload: payload
    }
}
export default createCommand;