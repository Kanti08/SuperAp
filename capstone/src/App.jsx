import{ Routes, Route,Link } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import React from 'react';
//import { BrowserRouter } from 'react-router-dom'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'


const App = () => {
  

  return (
    <>
    <Routes>
          <Route path="/register" element={<RegisterPage/>}>
          </Route>
    </Routes>
    </>
  );
};

export default App;
