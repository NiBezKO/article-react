import React from 'react'
import ContentLoader from "react-content-loader"

const Skeleton = () => {
  return (
    <ContentLoader 
    speed={2}
    width={550}
    height={350}
    viewBox="0 0 550 350"
    backgroundColor="#b0b0b0"
    foregroundColor="#ffffff"
    
  >
    <rect x="108" y="41" rx="0" ry="0" width="324" height="30" /> 
    <rect x="56" y="99" rx="0" ry="0" width="428" height="16" /> 
    <rect x="56" y="129" rx="0" ry="0" width="428" height="16" /> 
    <rect x="58" y="161" rx="0" ry="0" width="428" height="16" />
  </ContentLoader>
  )
}

export default Skeleton
