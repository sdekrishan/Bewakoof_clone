import React from 'react'
import './imageCard.css'
const ImageCard = (imglink) => {
  return (
    <div  className='mycard' >
    <img src={imglink.li}/>

    </div>
  )
}

export default ImageCard