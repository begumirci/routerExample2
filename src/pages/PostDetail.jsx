import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { myContext } from '../App';
import NotFound from './NotFound';

export default function PostDetail() {
  const { id } = useParams();
  const { data } = useContext(myContext);
  console.log(data);
  const post = data.find((x) => x.id == id);
  if (!post) {
    return <NotFound />;
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '400px',
        gap: '15px',
      }}
    >
      <span>Post ID: {post.id}</span>
      <span>Post Name: {post.title}</span>
      <span>Post Detay: {post.body}</span>
    </div>
  );
}
