import React from 'react';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import './CardList.scss'

const CardList = ({posts}) => (
    <Container>
        <Row>
            {posts &&
            posts.map(({id, image, title, excerpt, action})=> (
                <Col xs={12} lg={4} key={id}>
                    <Card className='mx-auto my-3'>
                        <Card.Img variant='top' src={image}/>
                        <Card.Body  className='text-center'>
                            <h5>{title}</h5>
                            <p>{excerpt}</p>
                            <Button variant='danger'>{action}</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}   
        </Row>
    </Container>
);

export default CardList;