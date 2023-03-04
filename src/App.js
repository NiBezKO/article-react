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
        <Footer lastElement={lastElement} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
