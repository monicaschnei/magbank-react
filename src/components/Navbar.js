import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Navbar, Container, Nav, Form, Button, ButtonGroup, NavDropdown} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import './Navbar.scss';
import logo from "../Design/logo.svg" 

const Navigation = ({handleCreateAcc, logged, auth}) => {
  const navigate = useNavigate ();

  const handleClick = () =>{
    auth.logout(navigate("/"));
  };
  return (
  <Navbar variant="dark" expand="lg">
    <Container>
    <Navbar.Brand href="#home">
    <Link to= '/'>
      <img
        src={logo}
        height="30"
        className="d-inline-block align-top"
        alt="Magbank logo"
      />
      </Link>
      </Navbar.Brand>
      {logged && (
        <>
          <Form>
            <div className='navbar__search-group d-none d-lg-flex'>
              <Form.Control type='text' placeholder='O que você procura?' />
              <Button variant='link'>
                <FontAwesomeIcon icon={faSearch} color='#FFF' />
              </Button>
            </div>
          </Form>
        
            <Button variant='outline-light' onClick={handleClick}>
                Sair
            </Button>
         
        </>
      )}

      {!logged && (
        <>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#cartao">Cartão</Nav.Link>
            <Nav.Link href="#quemsomos">Quem somos</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
          </Nav>
          <ButtonGroup aria-label="Basic example">
            <Button variant="outline-light">
                <NavDropdown title="Acessar minha conta" id="basic-nav-dropdown">
                    <Link to="/login"><NavDropdown.Item href="#action/3.1">Pessoa física</NavDropdown.Item></Link>
                    <NavDropdown.Item href="#action/3.2">Pessoa jurídica</NavDropdown.Item>
                </NavDropdown>
            </Button>
            <Button variant="outline-light" onClick={handleCreateAcc}>Abra sua conta</Button>
        </ButtonGroup>
        </Navbar.Collapse>
      
        </>
      )}
  </Container>
</Navbar>
);
  }
export default Navigation;