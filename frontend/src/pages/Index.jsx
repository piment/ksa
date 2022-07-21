import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

function Index() {
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const [user, setUser] = useState({});
  const [file, setFile] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.title.value.toLowerCase().replace(/\s/g, '_'));
    const formData = new FormData();
    formData.append('ebook', file);
    formData.append('title', e.target.title.value.replace(' ', '_'));
    axios.post(import.meta.env.VITE_BACKEND_URL + '/file', formData, {headers: {
      "content-type": "application/pdf"
    }}).then(res => console.log(res))
  }
  useEffect(() => {
    axios
      .get(
        `${
          backend_url
        }/user/ab1ce03a-011d-41ef-9ec0-3cff40ee163d`
      )
      .then((user) => setUser(user.data));
  }, []);
  return (
    <Container fluid>
      <Row>
        <Col xs={12} className='text-center text-white bg-dark p-2'>
          <h2>ACCUEIL</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={2}>User: {user.nickname}</Col>
        <Col xs={2}>Email: {user.email}</Col>
        <Col>Affiliation Code: {user.affiliate_code}</Col>
      </Row>
      <Row>
        <Col>My Files</Col>
      </Row>
      {user.files && user.files.map((file) => (
        <Row key={file.id}>
          <Col>File :</Col>
          <Col>{file.title}</Col>
          <Col><a href={`${import.meta.env.VITE_BACKEND_URL}/file/${file.id}`}>Voir</a></Col>
        </Row>
      ))}
      <Row>
        <form method='POST' encType='multipart/form-data' onSubmit={handleSubmit}>
          <label htmlFor="title">
            <input type="text" name="title" id="title" />
          </label>
          <label htmlFor="ebook">
            <input type="file" name="ebook" id="ebook" onChange={(e) => setFile(e.target.files[0])}/>
          </label>
          <button type="submit">Send File</button>
        </form>
      </Row>
    </Container>
  );
}

export default Index;
