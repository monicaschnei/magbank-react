import Reat from 'react';
import {Container, Row, Button,Col} from 'react-bootstrap';

const CenteredButton = ({children}) =>(
    <Container>
        <Row lg={6}  className='d-flex justify-content-center' >
            <Button className='my-5 py-2 ' variant='success' size='lg'>
                {children}
            </Button>
        </Row>
    </Container>
);

export default CenteredButton;