import React, { useRef } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import AppContext from './context';
import Footer from './components/Footer';
import FullArticle from './components/FullArticle';

import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import './index.scss';

function App() {
  const [posts, setPosts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  // const [fetching, setFetching] = React.useState(true)
  const [userId, setUserId] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');
  const [searchPosts, setSearchPosts] = React.useState('');
  //   const newPost = (post) => {
  //   const body = post.body;
  //   const title = post.title;
  //    const userID = post.userID;
  //  };

  const axiosPost = () => {
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        title: title,
        body: body,
        userId: userId,
      })
      .then((res) => {
        setPosts([...posts, res.data]);
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const createPost = (e) => {
    e.preventDefault();
    console.log(title, body, userId);
    axiosPost();
    setTitle('');
    setBody('');
    setUserId('');
  };
  const lastElement = useRef();
  const observer = useRef();
  console.log(lastElement);

  React.useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${currentPage}`)
      .then((res) => {
        setPosts([...posts, ...res.data]);
      })
      .finally(() => setIsLoading(false));
  }, [currentPage]);

  React.useEffect(() => {
    var callback = function (entries, observer) {
      if (entries[0].isIntersecting && currentPage) {
        setCurrentPage(currentPage + 1);
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current);
  }, [setPosts]);

  return (
    <AppContext.Provider
      value={{
        posts,
        setPosts,
        userId,
        setUserId,
        title,
        setTitle,
        body,
        setBody,
        createPost,
        searchPosts,
        setSearchPosts,
      }}>
      <div className="wrapper">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <Content
                posts={posts}
                setPosts={setPosts}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            }
          />
          <Route path="/posts/:id" element={<FullArticle />} />
        </Routes>
        <Footer lastElement={lastElement} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
