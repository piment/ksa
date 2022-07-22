import { Container, Row, Col } from 'react-bootstrap';

function Favourites() {
  return (
    <Container fluid>
      <Row className='mb-4'>
        <Col xs={12} className='text-center text-white bg-dark p-2'>
          <h2>MY FAVOURITES</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default Favourites;
