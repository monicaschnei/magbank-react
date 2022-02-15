import React, {useState} from 'react';
import {Routes, Router, Switch, Route, Link} from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CreditCard from './components/CreditCard';
import CardList from './components/CardList';
import CenteredButton from './components/CenteredButton';
import Institutional from './components/institutional';
import Faq2 from './components/Faq2';
import Footer2 from './components/Footer2';
import AccountModal from './components/AccountModal';
import './App.scss';

import Home2 from './views/Home2';

const App = () =>  {

      const [showModal, setShowModal] = useState(false);
    
      return (
        
      <Router>
        <Navbar handleCreateAcc={() => setShowModal (true)} />
        <Route path=''>
            <Home2 handleClick={()=> setShowModal (true)}/>
        </Route>

        <Footer2/>
        <AccountModal show={showModal} handleClose={() => setShowModal(false)}/>

      </Router>
      );
 
  
      
      
      
       
      
        
        
     
 
      
   

}
  


export default App;
