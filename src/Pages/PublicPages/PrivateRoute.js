import React, { useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { ThemeColors } from "../../theme/theme";
import Navbar from "../layout/navbar/navbar";
import SideLayout from "../layout/sidebar/sidebar";
const PrivateLayout = () => {
  const outerdiv = {
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
  };

  const auth = false;
  const pathname = useLocation();

  const [initalpath] = useState(
    // Commonservice.getLeftMenuOptions()[0].url
    //   ? Commonservice.getLeftMenuOptions()[0].url
    //   : Commonservice.getLeftMenuOptions()[0].submenus[0].url
  );
  return (
    <>
      <div style={outerdiv}>
        <div className="d-flex m-0 w-100 h-100" id="wrapper">
          <div className="">
            <SideLayout />
          </div>
          <div className="w-100 left-main-height">
            <Navbar />
            <div
              className="content-section"
              style={{ backgroundColor: ThemeColors.bg }}
            >
              {auth ? <Outlet /> : <Navigate to={""} />}
            </div>
          </div>
        </div>
      </div>
      {/* <Header />
              <div className="container-flex">
                {auth? <Outlet />:<Navigate to ='auth' state={{from:pathname}} replace/>}
                </div> */}
    </>
  );
};

export default PrivateLayout;
