import React from 'react'
import Article from './Article'
import Skeleton from './Skeleton'
import Modal from './Modal'

const Content = ({
  posts, 
  isLoading, 
  setShowArticle, 
  showArticle,
  seeMore,
  modalData,
}) => {
  
    return (
    <div className="content">
      <h1>Articles</h1>
      <ul className="articleList">
        {isLoading ? (
          <div>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
          </div>
        ) : (
          <>
            {posts.map((item) =>
              <Article
                key={item.id}
                title={item.title}
                body={item.body}
                openModal={() => setShowArticle(true)}
                onClickBtn={(id) => seeMore(id)}
              />
            )}
          </>
        ) }
        
      </ul>
      {showArticle ? <Modal modalData={modalData} onClose={() => setShowArticle(false)} /> : null}
  </div>
  )
}

export default Content
