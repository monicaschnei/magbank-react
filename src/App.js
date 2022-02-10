import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CreditCard from './components/CreditCard';
import CardList from './components/CardList';
import CenteredButton from './components/CenteredButton';
import Institutional from './components/institutional';
//import Faq from './components/FAQ'
import Faq2 from './components/Faq2'


import './App.scss';
import posts from './data/posts';

const App = () =>  (
    <div className="App">
      <Navbar />
      <Hero/>
      <CreditCard/>
      <CardList posts={posts}/>
      <CenteredButton>Abra sua conta</CenteredButton>
      <Institutional/>
      <Faq2/>
      
   
     

    </div>
);

export default App;
