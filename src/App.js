import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import BaseLayout from './common/baseLayout';
import PrivateLayout from './Pages/PublicPages/PrivateRoute';
import SelectInstitute from './Pages/PublicPages/selectInstitute';

function App() {
  const [authe, setAuth] = useState(false)
  let auth = localStorage.getItem("auth")
  console.log(auth);
  return (
    <Routes>
      <Route path='auth/*' element={<BaseLayout auth={authe} setAuth={setAuth} />} />
      <Route path='/' element={<PrivateLayout />} >
        <Route index element={<SelectInstitute />} />
      </Route>
    </Routes>
  )
}
export default App;
