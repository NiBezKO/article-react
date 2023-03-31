import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import style from './FullArticle.module.scss';
import AppContext from '../../context';

const FullArticle = () => {
  const { posts, setPosts } = React.useContext(AppContext);

  const { id } = useParams();
  const [comments, setComments] = React.useState([]);
  console.log(comments);
  React.useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => {
      setPosts(res.data);
    });
  }, [id, setPosts]);

  React.useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then((res) => {
      setComments(res.data);
    });
  }, [id]);

  if (!comments) {
    return 'Загрузка...';
  }
  return (
    <div className={style.wrapper}>
      <div className={style.FullArticle__Container}>
        <h3 className={style.title}>{posts.title}</h3>
        <article className={style.body}>{posts.body}</article>
      </div>

      <div className={style.comments}>
        <h3 className={style.commentsTitle}>Комментарии</h3>
        {comments.map((comm) => (
          <>
            <h3 className={style.userName}>{comm.user}</h3>
            <h3 className={style.email}>{comm.email}</h3>
            <p className={style.commentsBody}> {comm.body}</p>
          </>
        ))}
      </div>
    </div>
  );
};

export default FullArticle;
