import { Container, Row, Col} from 'react-bootstrap';

function Footer() {
  return (
    <Container>
        <Row>
            <Col className='text-center py-3'>
                Copyright &copy; Proshop
            </Col>
        </Row>
    </Container>
  )
}

export default Footer