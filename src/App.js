import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import axios from "axios";
import "./index.scss"

function App() {

  const [posts, setPosts] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);

  const [showArticle, setShowArticle] = React.useState(false);

  const [modalItems, setModalItems] = React.useState([]);

  React.useEffect (() => {
    try {
      axios.get("https://jsonplaceholder.typicode.com/posts?userId=1").then((res) => {
        setPosts(res.data)
      }).finally(() =>setIsLoading(false))
    } catch (error) {
      alert("Не удалось загрузить статьи")
    }
   
  }, [])

  return (
    <div className="wrapper">
     <Header/>
     <Content
     isLoading={isLoading}
     posts={posts}
     setShowArticle={setShowArticle}
     />
    
     <Footer/>
     {showArticle ? <Modal onClose={() => setShowArticle(false)} /> : null}
    </div>
  );
}

export default App;
