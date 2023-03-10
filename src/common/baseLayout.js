import React, { useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Header from '../navigations/header';
import LoginPage from '../Pages/auth/login';
import ForgotPasswordPage from '../Pages/auth/password/forgot';
import OtpPage from '../Pages/auth/password/otp';
import ResetPage from '../Pages/auth/password/reset';
import SignUpPage from '../Pages/auth/signup';
import UploadPage from '../Pages/auth/uploadPhoto';
import SelectInstitute from '../Pages/PublicPages/selectInstitute';
import "./baseLayout.css";

export function BaseLayout({ height }) {

  return (
    <div className='height1 outerDivLogin'>
      <Header />
      <Outlet />
    </div>
  )
}
const Layout = ({ auth, setAuth }) => {

  const [height, setHeight] = useState(false);
  const { innerWidth: width } = window;
  return (
    <Routes>
      <Route element={<BaseLayout height={height} />}>
        <Route index element={<LoginPage auth={auth} setAuth={setAuth} setHeight={setHeight} height={height} />} />
        <Route path='login' element={<LoginPage auth={auth} setAuth={setAuth} setHeight={setHeight} height={height} />} />
        <Route path='sign-up' element={<SignUpPage setHeight={setHeight} height={height} width={width} />} />
        <Route path='forgot-password' element={<ForgotPasswordPage />} />
        <Route path='otp' element={<OtpPage />} />
        <Route path='reset-password' element={<ResetPage />} />
        <Route path='upload-photo' element={<UploadPage />} />
        <Route path='institute' element={<SelectInstitute />} />
      </Route>
    </Routes>
  )
}
export default Layout