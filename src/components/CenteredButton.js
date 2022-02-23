import React from 'react';
<<<<<<< HEAD
import {Container, Row, Button} from 'react-bootstrap';
=======
import {Container, Row, Button,Col} from 'react-bootstrap';
>>>>>>> 07113cdc84dbf677d8b6b0bbbc3fee37631cfd92

const CenteredButton = ({children, onClick}) =>(
    <Container>
        <Row lg={6}  className='d-flex justify-content-center' >
            <Button className='my-5 py-2 ' variant='success' size='lg' onClick={onClick}>
                {children}
            </Button>
        </Row>
    </Container>
);

export default CenteredButton;