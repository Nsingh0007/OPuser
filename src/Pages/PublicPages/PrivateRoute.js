import React from "react";
import Header from "../layout/sidebar/sidebar";
const PrivateLayout = () => {
  const outerdiv = {
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
  };

  return (
    <>
        <div style={{ display: "flex" }}>
          Hello
          <Header/>
        </div>

      {/* <div style={outerdiv}>
        <div className="d-flex m-0 w-100 h-100" id="wrapper">
          <div className="h-100">
        
          </div>
          <div className="w-100 left-main-height">
            <Navbar />
            <div
              className="content-section"
              style={{ backgroundColor: ThemeColors.bg }}
            >
            <Outlet />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default PrivateLayout;
