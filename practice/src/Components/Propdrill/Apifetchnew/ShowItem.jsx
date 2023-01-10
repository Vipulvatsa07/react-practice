import React from 'react'

const ShowItem = (props) => {
    const{title,image}=props
  return (
    <div>
        <img src={image} alt="" style={{widht:"100px", height:"100px"}}  />
        {title}
    
    </div>
  )
}

export default ShowItem