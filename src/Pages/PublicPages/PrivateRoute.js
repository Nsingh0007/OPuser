import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import img from '../../assets/images/Group 2.png';
import Header from '../../navigations/header';
import { ThemeColors } from '../../theme/theme';


const PrivateLayout = () => {
  const auth=false
  const pathname= useLocation()
  return (
    <>
      <div className='outerDiv'>
        <div className='innerDiv'>
          <div className='outerflex'>
            <div className='left-flex' style={{ backgroundColor: ThemeColors.light }}>
              <Header />
              <div className="container-flex">
                {auth?<Outlet />:<Navigate to ='auth' state={{from:pathname}} replace/>}
                </div>
            </div>
            <div className='right-flex' style={{ backgroundColor: ThemeColors.primary }}>
              <img src={img} alt="" className='responsiveImg' />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}


export default PrivateLayout
