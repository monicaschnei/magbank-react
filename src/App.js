import React, {useState} from 'react';
import { Routes, Route, Redirect} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer2';
import AccountModal from './components/AccountModal';
import './App.scss';

import Home from './components/Home';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
 const PrivateRoute = ({children, logged, ...rest}) => {
   <Route
    {...rest}
   render={() =>
    (logged ? children : <Redirect to='/login' />)}
/>
 };

const App = () => {
  const [showModal, setShowModal] = useState (false);
  const [name, setName] = useState ();
  const [account, setAccount] = useState ();
  const isLogged = name && account;

const fakeAuth = {
    login (name, account, cb) {
    setName (name);
    setAccount (account);
    setTimeout (cb, 100);
   },
   logout (cb) {
    setName();
    setAccount ();
    setTimeout (cb, 100);
   },
  };

  return (
    <>
   
      <Navbar handleCreateAcc={() => setShowModal (true)}/>

      <Routes>
        <Route path="/login" element={<Login auth={fakeAuth}/>} />
        <Route path="/dashboard/*" logged={isLogged} element={<Dashboard name={name} account = {account}/>} />
        <Route path="/" element={<Home />} /> 
      </Routes>
      <AccountModal/>
      <Footer/>
   
    
     
</>
  )}
export default App;

