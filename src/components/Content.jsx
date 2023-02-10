import React from 'react';
import Article from './Article';
import Skeleton from './Skeleton';
import Modal from './Modal';
import Search from './Search/index';
import { Link } from 'react-router-dom';

const Content = ({
  posts,

  isLoading,
  setShowArticle,
  showArticle,
  //seeMore,
  //modalData,
}) => {
  const [modalArticle, setModalArticle] = React.useState({});
  const [searchPosts, setSearchPosts] = React.useState('');

  return (
    <div className="content">
      <div className="topContent">
        <h1>Articles</h1>
        <Search searchPosts={searchPosts} setSearchPosts={setSearchPosts} searchValueInput />
      </div>

      <ul className="articleList">
        {isLoading ? (
          <div>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        ) : (
          <>
            {posts
              // .filter((item) => item.title.toLowerCase().includes(setSearchPosts.toLowerCase()))
              .map((item) => (
                <Link className="postsLink" key={item.id} to={`/posts/${item.id}`}>
                  <Article title={item.title} body={item.body} onClickBtn={setShowArticle} />
                </Link>
              ))}
          </>
        )}
      </ul>
      {showArticle ? <Modal onClose={() => setShowArticle(false)} /> : null}
    </div>
  );
};

export default Content;
