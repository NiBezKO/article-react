import React from 'react'

const Article = ({id, title, body, openModal, onClickBtn}) => {
  
  const obj = {id, title, body}

  const onClickSeeMore = () => {
    console.log(onClickSeeMore )
    onClickBtn(obj)
    
  }

 

  return (

    <li key={id} className="article">
      <div className="articleInner">
        <h2 className="title">{title}</h2>
        <p className="description">{body}</p>
      </div>
      <button onClick={onClickSeeMore} className='articleBtn'>See More</button>
  </li>
  )
}

export default Article
