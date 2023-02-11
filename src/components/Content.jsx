import React from 'react';
import Article from './Article';
import Skeleton from './Skeleton';

import AppContext from '../context';
import Search from './Search/index';
import { Link } from 'react-router-dom';

const Content = ({
  //posts,

  isLoading,
  setShowArticle,
  showArticle,
  //seeMore,
}) => {
  const [searchPosts, setSearchPosts] = React.useState('');
  const { posts } = React.useContext(AppContext);

  return (
    <div className="content">
      <div className="topContent">
        <h1>Articles</h1>
        <Search searchPosts={searchPosts} setSearchPosts={setSearchPosts} searchValueInput />
      </div>
      <>
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
              {
                // .filter((item) => item.title.toLowerCase().includes(setSearchPosts.toLowerCase()))
                posts
                  .filter((item) => {
                    if (item.title.toLowerCase().includes(searchPosts.toLowerCase())) {
                      return true;
                    }
                    return false;
                  })
                  .map((item) => (
                    <Link className="postsLink" key={item.id} to={`/posts/${item.id}`}>
                      <Article title={item.title} body={item.body} />
                    </Link>
                  ))
              }
            </>
          )}
        </ul>
      </>
    </div>
  );
};

export default Content;
