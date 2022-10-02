import Navbar from '../Components/Navbar'
import { Divider } from '@chakra-ui/react'
import WithSubnavigation from '../Components/MainNavbar'
import { Navbar1 } from '../Components/MainNavbar'
import ImageCarousel from '../Components/Carousel/ImageCarousel'
import ImageScrollerBox from '../Components/Carousel/ImageScrollerBox'
import BelowImage from '../Components/BelowImage'
import Popular from '../Components/PopularCategory/Popular'
import DiscountPeDiscount from '../Components/DiscountPeDiscount/DiscountPeDiscount'
import BestSellers from '../Components/BestSellers/BestSellers'
import SecondCard from '../Components/Carousel/SecondCarousel/SecondCard'
import SecondImageCarousel from '../Components/Carousel/SecondCarousel/SecondImageCrousel'
const Women =()=>{
    return (<div>
        
        <Navbar/>
        
        <WithSubnavigation />
        
        <Navbar1/>
       <ImageCarousel/>
       <BelowImage src='https://images.bewakoof.com/uploads/grid/app/desktop-tod-strip-women-1654149139.jpg' />
       <ImageScrollerBox one='https://images.bewakoof.com/uploads/grid/app/New-thumbnail-DOTD-Women-1664685592.jpg'
       two='https://images.bewakoof.com/uploads/grid/app/bestseller-women-1660932774.jpg'
       three='https://images.bewakoof.com/uploads/grid/app/custom-women-1660932774.jpg'
       four='https://images.bewakoof.com/uploads/grid/app/newest-thumbnail-new-arrivals-1660932776.jpg'
       five='https://images.bewakoof.com/uploads/grid/app/newest-thumbnail-lastsize-left-1660932776.jpg'
       six='https://images.bewakoof.com/uploads/grid/app/newest-thumbnail-plus-siz-1660932777.jpg'
       seven='https://images.bewakoof.com/uploads/grid/app/newest-thumbnail-merch-store-1660932776.jpg'
       eight='https://images.bewakoof.com/uploads/grid/app/vote-1660932778.jpg'
       nine='https://images.bewakoof.com/uploads/grid/app/newest-thumbnail-personal-care-1660932777.jpg'
       ten='https://images.bewakoof.com/uploads/grid/app/newest-thumbnail-coupon-offer-1660932775.jpg' hei='170px' a='hi' />


        <Popular one='https://images.bewakoof.com/uploads/grid/app/category-box-new-women-BFtees-1661872777.jpg'
        two='https://images.bewakoof.com/uploads/grid/app/category-box-new-women-printedtees-1661872782.jpg'
        three='https://images.bewakoof.com/uploads/grid/app/category-box-new-women-oversizedtees-1661872781.jpg'
        four='https://images.bewakoof.com/uploads/grid/app/category-box-9-1662981568.jpg'
        five='https://images.bewakoof.com/uploads/grid/app/category-box-10-1662981568.jpg'
        six='https://images.bewakoof.com/uploads/grid/app/category-box-11-1662981568.jpg'
        seven='https://images.bewakoof.com/uploads/grid/app/category-box-new-women-tops-1661872784.jpg'
        eight='https://images.bewakoof.com/uploads/grid/app/category-box-new-women-jeans-1661872779.jpg'
        nine='https://images.bewakoof.com/uploads/grid/app/category-box-new-women-dresses-1661872779.jpg'
        ten='https://images.bewakoof.com/uploads/grid/app/category-box-new-women-joggers-1661872780.jpg'
        eleven='https://images.bewakoof.com/uploads/grid/app/category-box-new-women-pj-1661872781.jpg'
        twelve='https://images.bewakoof.com/uploads/grid/app/category-box-new-women-covers-1661872779.jpg' />

        
        <DiscountPeDiscount
          one='https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-bb1g1-1664435465.jpg'
          two='https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-clearance-zone-1663691417.jpg'
          three='https://images.bewakoof.com/uploads/grid/app/midsize-banner-Flat65Off-women-1663691416.jpg'
          four='https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-buy2at899--1--1664261158.jpg'/>

        <BestSellers />

        <SecondImageCarousel/>
        <h1>Home</h1>
    </div>
    )
}
export default Women