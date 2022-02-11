import React from 'react';
import {Container, Row, Col, Accordion, Card, Button, section} from 'react-bootstrap'
import IconText from './IconText';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './Faq.scss';
import {
    
    faCreditCard,
    faWallet,
    faUserTie,
    faShieldAlt
   
} from '@fortawesome/free-solid-svg-icons';

const Faq = () => {

    
    
    const options = [
        {icon: faCreditCard, text:'Cartão de crédito'},
        {icon: faWallet, text: 'Conta e abertura'},
        {icon: faShieldAlt, text: 'Token digital'},
        //{icon: FaUserTie, text: 'Produtos e serviços'}
    ]
    return (
    <section className='faq text-light'>
    <Container className='faq py-5 '>
    <Row className='justity-content-center'>
        <h2 className='faq-title  my-5'>Dúvidas frequentes</h2>
    </Row>
        <Row className='d-flex align-items-center justify-content-center'>
            <Col className='d-lg-none mb-5' xs={12}>
                <Row>
                    
                    
                </Row>

            </Col>
            <Col className='d-none d-lg-block'>
                <IconText 
                icon={faCreditCard} size={3} className='mb-3' textClassName= 'lead' color='#fff'>
                    Cartão de crédito e débito
                </IconText>
                <IconText icon={faWallet} size={3} className='mb-3' textClassName= 'lead' color='#fff'>
                    Conta e abertura
                </IconText>
                <IconText icon={faShieldAlt} size={3} className='mb-3' textClassName= 'lead' color='#fff'>
                    Token digital
                </IconText>
                <IconText icon={faUserTie}size={3} textClassName= 'lead' color='#fff'>
                    Produtos e serviços
                </IconText>
            </Col>
            <Col>
                <Accordion defaultActiveKey="0">
                    <Card >
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant='link' eventKey="0">Lorem ipsum dolor sit amet</Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et porta magna. Nulla mattis tortor vitae metus vestibulum scelerisque. Ut mollis a nisl vel suscipit. Curabitur scelerisque placerat ultrices. Proin purus ante, congue vel arcu ac, porta condimentum mauris. Maecenas massa orci, fringilla eget fermentum nec, dignissim nec diam.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card >
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant='link'eventKey="1">Nulla porttitor eros ac ex tristique posuere </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et porta magna. Nulla mattis tortor vitae metus vestibulum scelerisque. Ut mollis a nisl vel suscipit. Curabitur scelerisque placerat ultrices. Proin purus ante, congue vel arcu ac, porta condimentum mauris. Maecenas massa orci, fringilla eget fermentum nec, dignissim nec diam.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card >
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant='link' eventKey="2">Quisque fringilla tincidunt arcu</Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                        <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et porta magna. Nulla mattis tortor vitae metus vestibulum scelerisque. Ut mollis a nisl vel suscipit. Curabitur scelerisque placerat ultrices. Proin purus ante, congue vel arcu ac, porta condimentum mauris. Maecenas massa orci, fringilla eget fermentum nec, dignissim nec diam.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card >
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant='link' eventKey="3">Nam elementum lobortis purus a maximus tortor</Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                        <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et porta magna. Nulla mattis tortor vitae metus vestibulum scelerisque. Ut mollis a nisl vel suscipit. Curabitur scelerisque placerat ultrices. Proin purus ante, congue vel arcu ac, porta condimentum mauris. Maecenas massa orci, fringilla eget fermentum nec, dignissim nec diam.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Col>
        </Row>
    </Container>
    </section>
    )
};

export default Faq;