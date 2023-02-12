import React from 'react';

const Article = ({ id, title, body }) => {
  return (
    <>
      <li key={id} className="article">
        <div className="articleInner">
          <h2 className="title">{title}</h2>
          <p className="description">{body}</p>
        </div>
        <div className="article__btns">
          <button className="articleBtn">See More</button>
        </div>
      </li>
    </>
  );
};

export default Article;
