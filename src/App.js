import React from 'react';
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
  // const [currentPage, setCurrentPage ] = React.useState(1)
  // const [fetching, setFetching] = React.useState(true)

  React.useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1`)
      .then((res) => {
        setPosts(res.data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  React.useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return function () {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {};

  return (
    <AppContext.Provider value={{ posts, setPosts }}>
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
          <Route path="/posts/:id" element={<FullArticle posts={posts} setPosts={setPosts} />} />
        </Routes>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
