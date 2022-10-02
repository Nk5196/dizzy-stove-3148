import React from "react";
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home';
import Login from "../Pages/Login";
import Search from "../Pages/Search";
import SignupPage from "../Pages/Signup";



function AllRoutes () {
  return (
    <Routes>   
       <Route path="/" element={<Home />} />
       <Route path="/login" element={<Login />} />
       <Route path="/search" element={<Search />} />

       <Route path="/signup" element={<SignupPage />} />
    </Routes>
  )
  
};

export default AllRoutes;