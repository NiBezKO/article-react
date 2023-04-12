import React from 'react';
import styles from './CreateForm.module.scss';
import AppContext from '../../context';
// import axios from 'axios';

const CreateForm = () => {
  const { title, setTitle, body, setBody, userId, setUserId, createPost } =
    React.useContext(AppContext);

  //const [post, setPost] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.createPost}>
      <div>{!open ? <button onClick={() => setOpen(!open)}>Create Article</button> : null}</div>
      {open ? (
        <div>
          <form className={styles.form} action="">
            <div className={styles.form__top}>
              <h3>Create Article</h3>
              <svg
                onClick={onClose}
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none">
                <g id="Menu / Close_MD">
                  <path
                    id="Vector"
                    d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </div>
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
            <button className={styles.form__button} onClick={createPost}>
              Создать пост
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default CreateForm;
