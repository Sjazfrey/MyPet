import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Health from './Components/health/health';
import Navbar from './Components/navbar/navbar';
import Pictures from './Components/pictures/pictures';
import Home from './Components/home/home';
import Signin from './Components/signin/signin';


function Petfile2() {
 
  return (
    <Router>

       <Navbar/>             
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Pictures' element={<Pictures/>}/>
        <Route path='/Health' element={<Health/>}/>
        <Route path='/Signin' element={<Signin/>}/>       
      </Routes>
    </Router>
  );
};


export default Petfile2;