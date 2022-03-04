import React from 'react';
import {Button, Col, Tabs, Tab, Form} from 'react-bootstrap';

const AccountPayments = () => (
    <>
    
            <Col xs={12} lg={8} className='mt-lg-5 pt-lg-5'>
            <h3 className='my-5'>Pagamentos</h3>
                <Tabs className=' mt-5 pt-lg-5 ' defaultActiveKey='boleto' >
                    <Tab eventKey='boleto' title='Boleto'> 
                        <Form.Group className="my-3" controlId="formBarCode">
                        <Form.Label>Código de Barras</Form.Label>
                        <Form.Control type="number" placeholder="Insira um código de barras" />   
                        </Form.Group>
                        <Form.Group controlId='formPaymentType' className='mb-5' key='inline-radio'>
                            <Form.Label>Forma de Pagamento</Form.Label>
                            <div className='d-flex'>
                            <Form.Check
                            type='radio'
                            id='debit'
                            className='mr-4'
                            label='Débito em Conta Corrente'
                            name='paymentType'
                            />
                            <Form.Check
                            type='radio'
                            id='credit'
                            
                            label='Cartão de Crédito'
                            name='paymentType'
                            
                            />
                            </div>
                        </Form.Group>
                        <Button variant='success'>Continuar</Button>
                    </Tab>
                    <Tab eventKey='transfer' title='Transferência'>    
                    </Tab>
                </Tabs>
            </Col>
    </>
     );



export default AccountPayments;