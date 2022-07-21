import { ListGroup, ListGroupItem } from 'react-bootstrap';

function Menu() {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item>Home</ListGroup.Item>
      <ListGroup.Item>Browse All</ListGroup.Item>
      <ListGroup.Item>My Ebooks</ListGroup.Item>
      <ListGroup.Item>My Favourites</ListGroup.Item>
      <ListGroup.Item>Settings</ListGroup.Item>
    </ListGroup>
  );
}

export default Menu;
