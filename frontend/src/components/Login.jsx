import { useContext } from 'react';
import {
  Card,
  Form,
  Button,
  Container,
  Row,
  Col,
  Stack,
} from 'react-bootstrap';
import axios from 'axios';
import UserContext from '../context/UserContext';

function Login() {
  const { setUser } = useContext(UserContext);

  const handleConnexion = (event) => {
    event.preventDefault();
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/user/${event.target.email.value}`
      )
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));
  };
  return (
    <Container>
      <Row>
        <Col xs={12} className='mt-5'>
          <Card
            bg='dark'
            text='light'
            style={{ maxWidth: '500px' }}
            className='mx-auto'
          >
            <Card.Header className='text-center'>KSA</Card.Header>
            <Card.Body>
              <Form onSubmit={handleConnexion}>
                <Form.Group controlId='fromBasicUsername' className='mb-3'>
                  <Form.Label>Username :</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Your username...'
                    name='email'
                  />
                </Form.Group>
                <Form.Group controlId='fromBasicPassword' className='mb-3'>
                  <Form.Label>Password :</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Your password...'
                    name='password'
                  />
                </Form.Group>
                <Stack direction='horizontal'>
                  <Button
                    type='submit'
                    className='mx-auto mt-4'
                    variant='success'
                  >
                    CONNECT
                  </Button>
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
