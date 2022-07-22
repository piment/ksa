import { Row, Col } from 'react-bootstrap';

function FileItem({ file }) {
  console.log(file);
  return (
    <tr>
      <th>
        <a href={`${import.meta.env.VITE_BACKEND_URL}/file/${file.id}`}>Voir</a>
      </th>
      <th>{file.title}</th>
      <th>
        {file.categories
          .map((el) => {
            return `${el.name}`;
          })
          .join(', ')}
      </th>
      <th>{file.shared ? '✔️' : '❌'}</th>
    </tr>
  );
}

export default FileItem;
