import React from 'react';

const Article = ({ id, title, body, onClickBtn }) => {
  return (
    <li key={id} className="article">
      <div className="articleInner">
        <h2 className="title">{title}</h2>
        <p className="description">{body}</p>
      </div>
      <button className="articleBtn">See More</button>
    </li>
  );
};

export default Article;
