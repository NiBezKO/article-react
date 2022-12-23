import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";

import Footer from "./components/Footer";
import axios from "axios";
import "./index.scss"

function App() {

  const [posts, setPosts] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);

  const [showArticle, setShowArticle] = React.useState(false);

  const [modalData, setModalData] = React.useState( {id: "", title: "", body: ""})


  React.useEffect (() => {
    try {
      axios.get("https://jsonplaceholder.typicode.com/posts?userId=1").then((res) => {
        setPosts(res.data)
      }).finally(() =>setIsLoading(false))
    } catch (error) {
      alert("Не удалось загрузить статьи")
    }
   
  }, []) 

  const seeMore =  (id) => {
    console.log(id)
    try {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(resposne=> resposne.json())
      .then(res=>setModalData(res))
    
    } catch (error) {
      alert("Ошибка")
    }
    
  }
 
  return (
    <div className="wrapper">
     <Header/>
     
     <Content
     isLoading={isLoading}
     posts={posts}
     setShowArticle={setShowArticle}
     showArticle={showArticle}
     seeMore={seeMore}
     modalData={modalData}
     />
    
     <Footer/>
     
    </div>
  );
}

export default App;
