import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Health from './Components/health/health';
import Navbar from './Components/navbar/navbar';
import Pictures from './Components/pictures/pictures';
import Home from './Components/home/home';
import Signup from './Components/signup/signup';
import Login from './Components/login/login';
import { AuthProvider } from './firebase/context';





function Petfile2() {
 
  return (
    <div className='hidescroll'>
    <AuthProvider>
    <Router>

       <Navbar/>             
     
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Pictures' element={<Pictures />}/>
        <Route path='/Health' element={<Health />}/>
        <Route path='/Login' element={<Login />}/>    
        <Route path='/Signup' element={<Signup />}/>     
      </Routes>
    </Router>
    </AuthProvider>
    </div>
  );
};


export default Petfile2;