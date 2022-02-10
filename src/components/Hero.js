import React from "react";
import {Row, Col,Card, Button, Image} from "react-bootstrap";
import logo from "../Design/logo__magic-pay--mobile.png";
import logoDesktop from "../Design/logo__magic-pay.png";
import "./Hero.scss";


const Hero = () => (
    
<Card className="text-center py-md-5 py-5 text-light hero">
  <Row >
    <Col lg className="aligment-image my-lg-5">
      <Image className="d-lg-none" variant="top"  src={logo}/>
      <Image className="d-none d-lg-inline-block" variant="top"  src={logoDesktop}/>
    </Col>
    <Col lg  className=" my-lg-5" > 
      <Card.Body className="aligment">
        <p>
          Pague suas contas pelo nosso App
        </p>
        <Button variant="outline" className="text-light">Abra sua conta</Button>
      </Card.Body>
    </Col>
  </Row>
</Card>
)

export default Hero;