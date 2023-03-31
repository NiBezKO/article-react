import React from 'react';

const Article = ({ title, body }) => {
  return (
    <li className="article">
      <div className="articleInner">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div className="article__btns">
        <button className="articleBtn">See More</button>
      </div>
    </li>
  );
};

export default Article;
