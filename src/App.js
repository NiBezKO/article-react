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
  const [showArticle, setShowArticle] = React.useState(false);
  const [posts, setPosts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  // const [modalData, setModalData] = React.useState("")

  // const seeMore = async (id) => {

  //   try {
  //     if (modalData.find((obj) => obj.id === obj.id)) {
  //       await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => {
  //       setModalData(res.data)})
  //     }
  //   } catch (error) {
  //     alert("Ошибка")
  //   }

  // }

  React.useEffect(() => {
    try {
      axios
        .get('https://jsonplaceholder.typicode.com/posts?userId=1')
        .then((res) => {
          setPosts(res.data);
        })
        .finally(() => setIsLoading(false));
    } catch (error) {
      alert('Не удалось загрузить статьи');
    }
  }, []);

  return (
    <AppContext.Provider value={{ showArticle, setShowArticle, posts, setPosts }}>
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
                setShowArticle={setShowArticle}
                showArticle={showArticle}
                //seeMore={seeMore}
                //modalData={modalData}
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
