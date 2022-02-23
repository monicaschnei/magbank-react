import React from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer2';
import AccountModal from './components/AccountModal';
import './App.scss';

import Home from './components/Home';
// import Login from './views/Login';
// import Dashboard from './views/Dashboard';

const App = () => {
  

  return (
    <>
    <Navbar/>
      <Home/>
      <AccountModal/>
      <Footer/>
</>
  )}
export default App;

