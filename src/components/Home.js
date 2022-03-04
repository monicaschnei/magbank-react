import React from 'react';

import CreditCard from '../components/CreditCard';
import Hero from '../components/Hero';
import CardList from "../components/CardList";
import CenteredButton from '../components/CenteredButton';
import Institutional from '../components/institutional';
import Faq2 from '../components/Faq2';
import posts from '../data/posts';

const Home = ({handleClick}) =>(
        <>
        <Hero/>
        <CreditCard/>
        <CardList posts={posts}/>
        <CenteredButton onClick={handleClick}>Abra sua conta</CenteredButton>
        <Institutional />
        <Faq2/>  
        </>
    
);
       
        


export default Home;