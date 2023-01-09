import Home from "./Component/Home/Home";
import LogInPage from "./Component/LoginPage/LogInPage";
import MerchandiseDesc from "./Component/MerchandiseComp/MerchandiseDesc";
import AccountSettings from "./Component/User/AccountSettings";
import UserCart from "./Component/User/UserCart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import createGetInitialState from "./Redux/Actions/createGetInitialState";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {

  return {
    dispatchCreateInitialState: (initialState) => dispatch(createGetInitialState(initialState))
  }

}


function App({ dispatchCreateInitialState }) {


  const requestToGetAllProducts = axios.get("https://api.escuelajs.co/api/v1/products?offset=0&limit=165")

  const requestToGetAllCategories = axios.get("https://api.escuelajs.co/api/v1/categories?offset=0&limit=5")

  const requestToGetAllAdminUsers = axios.get("https://dummyjson.com/users?skip=4&limit=1")


  useEffect(() => {
    setTimeout(() => {
      axios.all([requestToGetAllProducts, requestToGetAllCategories, requestToGetAllAdminUsers])
        .then(
          axios.spread((response1, response2, response3) => {
            dispatchCreateInitialState({
              AllProducts: response1.data,
              AllCategories: response2.data,
              AllAdminUsers: response3.data.users,
              isLoading: false
            })
          })
        )
    }, 4500)
    // eslint-disable-next-line
  }, [])




  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/description-product/:category/:title" element={<MerchandiseDesc />} />
          <Route path="/account-settings" element={<AccountSettings />} />
          <Route path="/cart" element={<UserCart />} />
        </Routes>
      </BrowserRouter>


    </>
  );
}
export default connect(null, mapDispatchToProps)(App);
