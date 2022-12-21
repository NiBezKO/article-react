import React from 'react'
import Article from './Article'
import Skeleton from './Skeleton'

const Content = ({posts, isLoading, setShowArticle}) => {
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
            />
          )}
        </>
      ) }
      
    </ul>
  </div>
  )
}

export default Content
