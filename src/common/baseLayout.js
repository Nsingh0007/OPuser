import React from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Header from '../navigations/header';
import LoginPage from '../Pages/auth/login';
import ForgotPasswordPage from '../Pages/auth/password/forgot';
import ResetPage from '../Pages/auth/password/reset';
import SignUpPage from '../Pages/auth/signup';
import UploadPage from '../Pages/auth/uploadPhoto';
import SelectCourse from '../Pages/PublicPages/selectCourse';
import SelectInstitute from '../Pages/PublicPages/selectInstitute';
import "./baseLayout.css";

export function BaseLayout() {
  return (
    <div className='height1 outerDivLogin'>
      <Header />
      <Outlet />
    </div>
  )
}
const Layout = () => {

  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route index element={<Navigate to={"login"} />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='sign-up' element={<SignUpPage />} />
        <Route path='forgot-password' element={<ForgotPasswordPage />} />
        {/* <Route path='verification' element={<OtpPage />} /> */}
        <Route path='reset-password' element={<ResetPage />} />
        <Route path='upload-photo' element={<UploadPage />} />
        <Route path='institute' element={<SelectInstitute />} />
        <Route path='course' element={<SelectCourse />} />
      </Route>
    </Routes>
  )
}
export default Layout