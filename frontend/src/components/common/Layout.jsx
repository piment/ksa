import { Container, Row, Col, Stack } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import axios from 'axios';
import Avatar from './Avatar';
import Menu from './Menu';

function Layout({ children }) {
  const [user, setUser] = useState({});
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/user/ab1ce03a-011d-41ef-9ec0-3cff40ee163d`)
    .then(user => setUser(user.data));
  }, [])
  return (
    <Container fluid style={{height: '100%'}}>
      <Row>
        <Col xs={12} md={2} className="sidebar_left">
        <Stack className='text-center mt-2'>
          <h1>KSA - V1.0.0</h1>
          <Avatar user={{...user, profil_pict:'https://picsum.photos/200'}}/>
          <Menu />
        </Stack>
        </Col>
        <Col xs={10} className='p-0'>{children}</Col>
      </Row>
    </Container>
  );
}

export default Layout;
