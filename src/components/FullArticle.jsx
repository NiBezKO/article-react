import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const FullArticle = ({ posts, setPosts }) => {
  const { id } = useParams();
  React.useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => {
      setPosts(res.data);
    });
  }, [id]);
  return (
    <div style={{ marginTop: '100px' }}>
      {posts && (
        <div>
          <h3>{posts.title}</h3>
          <article>{posts.body}</article>
        </div>
      )}
    </div>
  );
};

export default FullArticle;
