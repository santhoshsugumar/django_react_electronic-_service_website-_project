import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Booking from './components/Booking';
import My_appointment from './components/My_appointment';
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/Navbar';
import axios from 'axios'
import { useEffect, useState } from 'react';

function App() {

  
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element={<Home/>} />
      <Route path='/booking' element={<Booking/>} />
      <Route path='/my_appoinment' element={<My_appointment />} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
