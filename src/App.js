import Home from "./Component/Home/Home";
import LogInPage from "./Component/LoginPage/LogInPage";
import MerchandiseDesc from "./Component/MerchandiseComp/MerchandiseDesc";
import AccountSettings from "./Component/User/AccountSettings";
import UserCart from "./Component/User/UserCart";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>

      {/* <Home /> */}
      {/* <LogInPage /> */}
      {/* <AccountSettings /> */}
      {/* <UserCart /> */}

      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/description-product/:category/:title" element={<MerchandiseDesc />} />
        <Route path="/account-settings" element={<AccountSettings />} />
        <Route path="/cart" element={<UserCart />} />
      </Routes>


    </>
  );
}

export default App;
