import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Menu() {
  return (
    <ListGroup variant='flush'>
      <ListGroup.Item>
        <Link to='/'>Home</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to='/all'>Browse All</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to='ebooks'>My Ebooks</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to='/favourites'>My Favourites</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to='/settings'>Settings</Link>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default Menu;
