import FileItem from './FileItem';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function FileList({ files, title, limit, more }) {
  console.log(files);
  return (
    <Table striped hover variant='dark'>
      <thead>
        <tr className='table-primary'>
          <th colSpan={4} className='text-center'>
            {title}
          </th>
        </tr>
        <tr>
          <th>icon</th>
          <th>Name</th>
          <th>Categories</th>
          <th>Shared</th>
        </tr>
      </thead>
      <tbody>
        {files.slice(0, limit).map((file) => (
          <FileItem file={file} key={file.id} />
        ))}
      </tbody>
      {more && (
        <tfoot>
          <tr className='table-warning'>
            <td colSpan={4}>
              <Link to={`/${more}`}>show all</Link>
            </td>
          </tr>
        </tfoot>
      )}
    </Table>
  );
}

export default FileList;
