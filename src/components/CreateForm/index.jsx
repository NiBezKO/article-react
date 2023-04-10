import React from 'react';
import styles from './CreateForm.module.scss';
import AppContext from '../../context';
// import axios from 'axios';

const CreateForm = () => {
  const { title, setTitle, body, setBody, userId, setUserId, createPost } =
    React.useContext(AppContext);

  //const [post, setPost] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  return (
    <div className={styles.createPost}>
      <div>
        <button onClick={() => setOpen(!open)}>Создание поста</button>
      </div>
      {open ? (
        <div>
          <form className={styles.form} action="">
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="title"
              type="text"
            />
            <input
              onChange={(e) => setBody(e.target.value)}
              value={body}
              placeholder="body"
              type="text"
            />
            <input
              onChange={(e) => setUserId(e.target.value)}
              value={userId}
              placeholder="UserId"
              type="text"
            />
            <button onClick={createPost}>Создать пост</button>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default CreateForm;
