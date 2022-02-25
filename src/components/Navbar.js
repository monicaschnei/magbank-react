import React from 'react';
import {Navbar, Nav, Container, Button, ButtonGroup, NavDropdown} from "react-bootstrap";
import './Navbar.scss';
import logo from "../Design/logo.svg" 

const Navigation = ({handleCreateAcc}) => (
    <Navbar variant="dark" expand="lg">
<Container>
    <Navbar.Brand href="#home">
      <img
        src={logo}
        height="30"
        className="d-inline-block align-top"
        alt="Magbank logo"
      /></Navbar.Brand>
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
                <NavDropdown.Item href="#action/3.1">Pessoa física</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Pessoa jurídica</NavDropdown.Item>
            </NavDropdown>
        </Button>
        <Button variant="outline-light" onClick={handleCreateAcc}>Abra sua conta</Button>
    </ButtonGroup>
    </Navbar.Collapse>
  </Container>
</Navbar>
);

export default Navigation;