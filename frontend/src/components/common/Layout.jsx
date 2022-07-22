import { Container, Row, Col, Stack } from 'react-bootstrap';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import Avatar from './Avatar';
import Menu from './Menu';

function Layout({ children }) {
  const { user } = useContext(UserContext);

  return (
    <Container fluid style={{ height: '100%' }}>
      <Row>
        <Col xs={12} md={2} className='sidebar_left'>
          <Stack className='text-center mt-2'>
            <h1>KSA - V1.0.0</h1>
            <Avatar user={user} />
            <Menu />
          </Stack>
        </Col>
        <Col xs={10} className='p-0'>
          {children}
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;
