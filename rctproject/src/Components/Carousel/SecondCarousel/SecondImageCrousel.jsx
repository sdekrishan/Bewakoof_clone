import React from 'react'
import SecondCard from './SecondCard'
import './SecondCarousel.css'
const SecondImageCarousel = () => {
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
        <SecondCard  li='https://images.bewakoof.com/uploads/grid/app/ColorSplash-StaticBanner-Men-01-Live-1663744899.jpg'/>
        <SecondCard li='https://images.bewakoof.com/uploads/grid/app/pants-1x1-upto-70--m-1664359504.gif'/>
        <SecondCard li='https://images.bewakoof.com/uploads/grid/app/StaticBanner-FestiveCoords-men-01-1664383562.gif' />
        <SecondCard li='https://images.bewakoof.com/uploads/grid/app/StaticBanner-FestiveCoords-men-01-1664383562.gif' />
        <SecondCard li='https://images.bewakoof.com/uploads/grid/app/pants-1x1-upto-70--m-1664359504.gif'/>
    </div>
</div>
  )
}

export default SecondImageCarousel