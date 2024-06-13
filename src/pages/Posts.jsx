import { useContext } from 'react';
import { myContext } from '../App';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export default function Posts() {
  const { data } = useContext(myContext);
  return (
    <div className='all-posts'>
      <div className='posts'>
        <h1>Postlar</h1>
        {data.map((post) => (
          <Link to={`${post.id}`} key={post.id}>
            Post {post.id}
          </Link>
        ))}
      </div>

      <Outlet />
    </div>
  );
}
