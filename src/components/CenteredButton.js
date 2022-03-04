import React from 'react';
import {Container, Row, Button,Col} from 'react-bootstrap';

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