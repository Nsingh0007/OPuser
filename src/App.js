import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useLayoutEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import BaseLayout from "./common/baseLayout";
import Loader from "./customComponents/loader/loader";
import AuthStore from "./mobx/auth";
import Otp from "./Pages/auth/password/otp";
import PrivateLayout from "./Pages/PublicPages/PrivateRoute";

import CheckAuth from "./utils/hooks/checkAuth";
import { RouteConstant } from "./utils/routes/constant";

function App() {
  const auth = toJS(AuthStore?.user?.user);
  const loading = toJS(AuthStore?.isLoading);
  const loginData = localStorage.getItem("key");
  const isVerifiedUser = CheckAuth();

  useLayoutEffect(() => {
    // console.log("----auth", toJS(AuthStore?.user?.token));
     AuthStore.setUser(JSON.parse(loginData));
  }, [loginData]);
  console.log("isVerifiedUser", isVerifiedUser);
  console.log("auth----", auth);

  return (
    <div>
      <ToastContainer />
      {loading && <Loader />}
      {auth &&
        (isVerifiedUser ? (
          <></>
          // <Routes>
          //    <Route path="/" element={<PrivateLayout />} />
          //   <Route index element={<PrivateLayout />} />
          // </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Navigate to="/verification" />} />
            <Route path="verification" element={<Otp />} />
            <Route path="*" element={<Navigate to="/verification" />} />
          </Routes>
        ))
        }
      {!auth && (
        <Routes>
          <Route path="auth/*" element={<BaseLayout />} />
          <Route index element={<Navigate to={RouteConstant.login} />} />
        </Routes>
      )}
    
    </div>
  );
}
export default observer(App);
