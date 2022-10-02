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
import Footer1 from '../Components/Footers/Footer1'
const Home =()=>{
    return (<div>
        
        <Navbar/>
        
        <WithSubnavigation />
        
        <Navbar1/>
       <ImageCarousel/>
       <BelowImage src='https://images.bewakoof.com/uploads/grid/app/desktop-tod-strip-men-1654149139.jpg' />
       <ImageScrollerBox one='https://images.bewakoof.com/uploads/grid/app/New-thumbnail-DOTD-Men-1664613357.gif'
       two='https://images.bewakoof.com/uploads/grid/app/bestseller-1660921671.jpg'
       three='https://images.bewakoof.com/uploads/grid/app/custom-men--1660921672.jpg'
       four='https://images.bewakoof.com/uploads/grid/app/new-arrival-1660921673.jpg'
       five='https://images.bewakoof.com/uploads/grid/app/last-sizes-1660921673.jpg'
       six='https://images.bewakoof.com/uploads/grid/app/plus-size-1660921675.jpg'
       seven='https://images.bewakoof.com/uploads/grid/app/offiicale-merch-1660921674.jpg'
       eight='https://images.bewakoof.com/uploads/grid/app/vote-1660921675.jpg'
       nine='https://images.bewakoof.com/uploads/grid/app/PC-1660921675.jpg'
       ten='https://images.bewakoof.com/uploads/grid/app/offer-box-1660921674.jpg' hei='170px' a='hi' />


        <Popular one='https://images.bewakoof.com/uploads/grid/app/category-box-new-printedtees-1661866118.jpg'
        two='https://images.bewakoof.com/uploads/grid/app/category-box-new-plaintees-1661866117.jpg '
        three='https://images.bewakoof.com/uploads/grid/app/category-box-new-oversizedtees-1661866116.jpg'
        four='https://images.bewakoof.com/uploads/grid/app/category-box-7-1662981567.jpg'
        five='https://images.bewakoof.com/uploads/grid/app/category-box-8-1662981567.jpg'
        six='https://images.bewakoof.com/uploads/grid/app/category-box-6-1662981566.jpg'
        seven='https://images.bewakoof.com/uploads/grid/app/category-box-new-1661866109.jpg'
        eight='https://images.bewakoof.com/uploads/grid/app/category-box-new-joggers-1661866115.jpg'
        nine='https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Kurtas-1657526328.jpg'
        ten='https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Boxers-1657526325.jpg'
        eleven='https://images.bewakoof.com/uploads/grid/app/category-box-new-shorts-1661866118.jpg'
        twelve='https://images.bewakoof.com/uploads/grid/app/category-box-new-accessories-covers-1661866111.jpg' />

        
        <DiscountPeDiscount
          one='https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-buy2-at-599-1663944665.jpg'
          two='https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-clearance-zone-1663691417.jpg'
          three='https://images.bewakoof.com/uploads/grid/app/midsize-banner-Flat65Off-men-1663691416.jpg'
          four='https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-buy2at899--1--1664261158.jpg'/>

        <BestSellers />

        <SecondImageCarousel/>
        <Footer1/>
    </div>
    )
}
export default Home