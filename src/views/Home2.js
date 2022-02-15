import React, {useState} from 'react';
import Hero from '../components/Hero';
import CreditCard from '../components/CreditCard';
import CardList from '../components/CardList';
import CenteredButton from '../components/CenteredButton';
import Institutional from '../components/institutional';
import Faq2 from '../components/Faq2';
import posts from '../data/posts';

const Home2 = (handleClick) =>{
         const [showModal, setShowModal] = useState(false);
    <>
        <Hero/>
        <CreditCard/>
        <CardList posts={posts}/>
        <CenteredButton onClick={() => setShowModal(true)}>Abra sua conta</CenteredButton>
        <Institutional onClick={() => setShowModal(true)}/>
        <Faq2/> 

    </>
       
        
   
     
        
}

export default Home2;