import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useLayoutEffect } from "react";
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";

import './App.css';
import BaseLayout from './common/baseLayout';
import Loader from "./customComponents/loader/loader";
import AuthStore from './mobx/auth';
import Otp from './Pages/auth/password/otp';
import { RouteConstant } from './utils/routes/constant';

function App() {
  const auth = toJS(AuthStore?.user?.user);
  const loading = toJS(AuthStore?.isLoading);
  const loginData = localStorage.getItem("key");
  // const [toggle, setToggle] = useState(false)

  useLayoutEffect(() => {
    // console.log("loginData", loginData)
    AuthStore.setUser(JSON.parse(loginData));
    // setToggle(true)
  }, [loginData]);

  // if (!toggle) return <div>Loading...</div>
  return (
    <div>
      <ToastContainer />
      {loading && <Loader />}
      {auth && (
        <Routes>
          <Route path="/" element={<Navigate to="/verification" />} />
          {/* <Route path="dashboard" element={<SelectInstitute />} /> */}
          <Route path='verification' element={<Otp />} />
          <Route path='*' element={<Navigate to="/verification" />} />
        </Routes>
      )}
      {!auth && (
        <Routes>
          <Route path="auth/*" element={<BaseLayout />} />
          <Route index element={<Navigate to={RouteConstant.login} />} />
        </Routes>
      )}
      {/* <Routes>
        <Route path='auth/*' element={<BaseLayout />} />
        <Route path='/' element={<PrivateLayout />} >
          <Route index element={<SelectInstitute />} />
        </Route>
      </Routes> */}
    </div>
  )
}
export default observer(App);
