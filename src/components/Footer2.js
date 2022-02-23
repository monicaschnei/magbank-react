import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import IconText from  './IconText';

import logo from '../Design/MAGbank.png';
import applestore from '../Design/applestore.png';
import googleplay from '../Design/googleplay.png';
import './Footer.scss';

import {
    
    faMobileAlt,
   
   
} from '@fortawesome/free-solid-svg-icons';


const Footer2 = () => (
    <footer className="footer">
        <Container>
            <Row className='text-center py-5'>
                <Col xs={12} lg={6} className="text-lg-start">
                <Image src={logo}/>
                </Col>
                <Col xs={12} lg={4} className='py-xs-5'>
                <Image src={applestore}/>
                <Image src={googleplay} className="m-2"/>
                
                </Col>
               
                <Col xs={12} lg={2} className="d-flex justify-content-center alig-items-center">
                 
                         
                    <IconText icon={faMobileAlt} color='#7c7c7c' size='2x' /> 
                    <IconText icon={faMobileAlt} color='#7c7c7c' size='2x' />  
                    <IconText icon={faMobileAlt} color='#7c7c7c' size='2x' />   
                 
                         
                    
                </Col>
            </Row>
        </Container>
         
    </footer>
   
)

export default Footer2;