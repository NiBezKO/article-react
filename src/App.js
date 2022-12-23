import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import AppContext from "./context";
import Footer from "./components/Footer";
import axios from "axios";
import "./index.scss"

function App() {

  const [posts, setPosts] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);

  const [showArticle, setShowArticle] = React.useState(false);

  const [modalData, setModalData] = React.useState("")


  React.useEffect (() => {
    try {
      axios.get("https://jsonplaceholder.typicode.com/posts?userId=1").then((res) => {
        setPosts(res.data)
      }).finally(() =>setIsLoading(false))
    } catch (error) {
      alert("Не удалось загрузить статьи")
    }
   
  }, []) 

  const seeMore = async (obj) => {
    
    try {
      await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=1/${obj}`).then((res) => {
        setModalData(res.data)})
    
    } catch (error) {
      alert("Ошибка")
    }
    
  }
 
  return (
    <AppContext.Provider value={{showArticle,setShowArticle,}}>
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
    </AppContext.Provider>
  );
}

export default App;
