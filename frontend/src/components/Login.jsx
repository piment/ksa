import { Card, Form, Button, Container, Row, Col, Stack } from 'react-bootstrap';

function Login() {

  const handleConnexion = (event) => {
    event.preventDefault();
    console.log('test')
  }
  return (
    <Container>
      <Row>
        <Col xs={12} className="mt-5">
        <Card bg="dark" text="light" style={{maxWidth: '500px'}} className="mx-auto">
        <Card.Header className='text-center'>KSA</Card.Header>
        <Card.Body>
          <Form onSubmit={handleConnexion}>
            <Form.Group controlId='fromBasicUsername' className='mb-3'>
              <Form.Label>Username :</Form.Label>
              <Form.Control type='text' placeholder='Your username...' />
            </Form.Group>
            <Form.Group controlId='fromBasicPassword' className='mb-3'>
              <Form.Label>Password :</Form.Label>
              <Form.Control type='password' placeholder='Your password...' />
            </Form.Group>
            <Stack direction='horizontal'>
              <Button type="submit" className='mx-auto mt-4' variant='success'>CONNECT</Button>
            </Stack>
          </Form>
        </Card.Body>
      </Card>
        </Col>
      </Row>
    </Container>
      
  );
}

export default Login;