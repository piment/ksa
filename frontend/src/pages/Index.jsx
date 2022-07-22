import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import path from 'path-browserify';
import FileList from '../components/file/FileList';
import UserContext from '../context/UserContext';

function Index() {
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const { user, setUser } = useContext(UserContext);
  const [file, setFile] = useState();
  const [title, setTitle] = useState('');

  const handleFileSelect = (e) => {
    setTitle(path.parse(e.target.files[0].name).name);
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('ebook', file);
    formData.append(
      'title',
      e.target.title.value.toLowerCase().replace(/\s/g, '_')
    );
    formData.append('user', user.id);
    axios
      .post(backend_url + '/file', formData, {
        headers: {
          'content-type': 'application/pdf',
        },
      })
      .then((res) => console.log(res));
  };
  console.log(user);
  return (
    <Container fluid>
      <Row className='mb-4'>
        <Col xs={12} className='text-center text-white bg-dark p-2'>
          <h2>HOME</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          {user.files && (
            <FileList
              files={user.files}
              title='My Ebooks'
              limit={3}
              more='ebooks'
            />
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          {user.files && (
            <FileList
              files={user.files}
              title='My Favourites'
              limit={2}
              more='favourites'
            />
          )}
        </Col>
      </Row>
      <Row>
        <form
          method='POST'
          encType='multipart/form-data'
          onSubmit={handleSubmit}
        >
          <label htmlFor='title'>
            <input
              type='text'
              name='title'
              id='title'
              value={title}
              onChange={(e) => setTitle(e.target.value.match(/^.pdf/))}
            />
          </label>
          <label htmlFor='ebook'>
            <input
              type='file'
              name='ebook'
              id='ebook'
              onChange={handleFileSelect}
            />
          </label>
          <button type='submit'>Send File</button>
        </form>
      </Row>
    </Container>
  );
}

export default Index;
