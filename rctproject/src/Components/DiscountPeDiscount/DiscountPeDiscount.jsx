import React from 'react'
import {Box,Grid,GridItem,Text,Image} from '@chakra-ui/react'
const DiscountPeDiscount = ({one,two,three,four}) => {
  return (
    <Box mt='2%' >
        <Text mb='1%' fontSize='xl' fontWeight={'500'}>DISCOUNT PE DISCOUNT</Text>
       <Grid templateColumns='repeat(2,1fr)' templateRows='repeat(2,400px)' columnGap='10px'>
        <GridItem>
            <Image src={one}/>
        </GridItem>
        <GridItem>
            <Image src={two}/>
        </GridItem>
        <GridItem>
            <Image src={three}/>
        </GridItem>
        <GridItem>
            <Image src={four}/>
        </GridItem>
        </Grid>
       </Box>
  )
}

export default DiscountPeDiscount