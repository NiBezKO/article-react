import React from 'react'
import AppContext from '../context';


const Article = ({id, title, body, onClickBtn}) => {
  
  const  {showArticle,setShowArticle,} = React.useContext(AppContext);

  const obj = {id, title, body}

  const onClickSeeMore = () => {
    
    onClickBtn(obj)
    setShowArticle(!showArticle)
    
  }

  console.log(onClickSeeMore)

  return (

    <li key={id} className="article">
      <div className="articleInner">
        <h2 className="title">{title}</h2>
        <p className="description">{body}</p>
      </div>
      <button onClick={(e) => onClickSeeMore(id, title, body, e)} className='articleBtn'>See More</button>
  </li>
  )
}

export default Article
