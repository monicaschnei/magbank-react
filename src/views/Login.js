import React, {useState} from 'react';
import {useLocation} from 'react-router-dom';
import {Row, Col, Form, Image, Button} from 'react-bootstrap';
import logo from '../Design/logo.svg';
import './Login.scss';

const Login = ({auth}) => {
    const [name, setName] = useState ();
    const [account, setAccount] = useState();
    const History = useLocation ();
    const handleSubmit = () => {
        auth.login(name, account, History.push("/dashboard"))
    }
    return
    (
    <section className='login'>
        <div className='login__container'>
            <Row>
                <Col className='text-center text-light'>
                <Image src={logo} className='mb-5'/>
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='lead'><strong>Nome e Sobrenome</strong></Form.Label>
                            <Form.Control type="text" value={name} onChange={(e) => setName (e.currentTarget.valueAsNumber)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='lead'><strong>Número da conta</strong></Form.Label>
                            <Form.Control type="number" value={account} onChange={(e) => setAccount(e.currentTarget.value)}/>
                        
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='lead'><strong>Senha</strong></Form.Label>
                            <Form.Control type="password"  />
                        </Form.Group>
                      
                            <Button className='mt-3' variant="success" type="submit" onClick={handleSubmit}>
                                Criar Conta
                            </Button>
                     
                    </Form>
                </Col>
            </Row>
        </div>
    </section>

);
}
export default Login;