import React from 'react'
import ImageCard from './ImageCard'
import './imageCarousel.css'
const ImageCarousel = () => {
    let box = document.querySelector('.product-container')
    
    const btnpressprev=()=>{
            let width = box.clientWidth;
            box.scrollLeft=box.scrollLeft - width;
            console.log(width)
    }
    const btnpressnext=()=>{
        let width = box.clientWidth;
            box.scrollLeft=box.scrollLeft + width;
            console.log(width)
    }
    
    
  return (
    <div className = "product-carousel" >
    <button className = "pre-btn" onClick={btnpressprev}> <p> &lt; </p> </button>
    <button className = "next-btn" onClick={btnpressnext}> <p> &gt; </p> </button >
    <div className = "product-container">
        <ImageCard  li='https://images.bewakoof.com/uploads/grid/app/ends-tomorrow-gif-1664640690.jpg'/>
        <ImageCard li='https://images.bewakoof.com/uploads/grid/app/revamped-banners-B1G1-men-1663834972.jpg'/>
        <ImageCard li='https://images.bewakoof.com/uploads/grid/app/b2g1-men-1663944664.jpg' />
        <ImageCard li='https://images.bewakoof.com/uploads/grid/app/winter-men-banner-1663943605.gif' />
        <ImageCard li='https://images.bewakoof.com/uploads/grid/app/1x1-oversized-men-1664521699.jpg'/>
    </div>
</div>
  )
}

export default ImageCarousel