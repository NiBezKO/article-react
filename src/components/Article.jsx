import React from 'react'

const Article = ({id, title, body, openModal}) => {
  return (
    <li key={id} className="article">
    <div className="articleInner">
       <h2 className="title">{title}</h2>
       <p className="description">{body}</p>
     </div>
     <button onClick={openModal} className='articleBtn'>See More</button>
  </li>
  )
}

export default Article
