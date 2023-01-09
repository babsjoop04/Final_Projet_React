import { legacy_createStore as createStore } from "redux";
import RootReducer from "../Reducers/RootReducer";

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


const Store = createStore(RootReducer, reduxDevtools)


export default Store