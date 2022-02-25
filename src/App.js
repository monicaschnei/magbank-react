import React from 'react';
import { Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer2';
import AccountModal from './components/AccountModal';
import './App.scss';

import Home from './components/Home';
import Login from './views/Login';
import Dashboard from './views/Dashboard';

const App = () => {
  

  return (
    <>
   
      <Navbar/>

      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/" element={<Home />} /> 
      </Routes>
      <AccountModal/>
      <Footer/>
   
    
     
</>
  )}
export default App;

