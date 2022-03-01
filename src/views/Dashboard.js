import React from  'react';
import {Container, Row, Col, Button} from  'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircle,faUser} from '@fortawesome/free-solid-svg-icons';
import AccountBalance from '../components/AccountBalance';
import './Dashboard.scss';

const Dashboard = () => {
    const data = {
        lastestBalance:[
        {date:'22/07', description:'SAQUE 24H 012345', value: '300,00'},
        {date:'21/07', description:'SUPERMERCADO 02323626', value: '275,00'},
        {date:'20/07', description:'NETFLIX 235236', value: '30,00'},
        {date:'15/07', description:'FARMÁCIA 12125', value: '350,00'},
    ],

    futureBalance: [
        {date:'22/07', description:'SAQUE 24H 012345', value: '300,00'},
        {date:'21/07', description:'SUPERMERCADO 02323626', value: '275,00'},
        {date:'20/07', description:'NETFLIX 235236', value: '30,00'},
        {date:'15/07', description:'FARMÁCIA 12125', value: '350,00'},
    ]
};
    return(
    <Container className='dashboard py-5'>
        <Row>
            <Col xs={12} lg={4}>
                <Row className='d-flex align-items-center mb-5'>
                    <Col xs={3} className='text-center'>
                        <span className='dashboard__user-avatar'>
                        <FontAwesomeIcon icon={faCircle} color='#f8f9fa'/>
                        <FontAwesomeIcon className='dashboard__user-icon' icon={faUser} size='3x' color='#7c7d7d'/>
                        </span>
                    </Col>
                    <Col xs={9}>
                        <h4>Mônica</h4>
                        <p className='text-muted'>ag: 1234 c/c: 4321-5</p>
                    </Col>
                </Row>
                <Button className='dashboard__button dashboard__button--active text-left d-block' variant='link' size='lg' block>Minha Conta</Button>
                <Button className='dashboard__button text-left d-block' variant='link' size='lg' block>Pagamento</Button>
                <Button className='dashboard__button text-left d-block' variant='link' size='lg' block>Extrato</Button>
            </Col>
            <AccountBalance  data={data}/>
        </Row>
        
    </Container>
)};

export default Dashboard;