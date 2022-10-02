import React from 'react'
import BestCard from './bestCard'
import {Grid, GridItem,Box,Text} from '@chakra-ui/react'

const BestSellers = () => {
  return (
    <Box mt='2%' >
        <Text mb='1%' fontSize='xl' fontWeight={'500'}>BEST SELLERS FOR MEN</Text>
    <Grid templateColumns={'repeat(5,1fr)'} gap='20px'>
        <GridItem>
            <BestCard Img='https://images.bewakoof.com/t320/troublemakers-trio-oversized-fit-t-shirt-546045-1664476978-1.jpg' p1='$449' p2 ='$1299'/>
        </GridItem>
        <GridItem>
        <BestCard  Img='https://images.bewakoof.com/t320/kakashi-sensei-oversized-fit-t-shirt-535872-1660241914-1.jpg' p1='$449' p2 ='$1299'/>
        </GridItem>
        <GridItem>
        <BestCard  Img='https://images.bewakoof.com/t320/troublemakers-trio-half-sleeve-t-shirt-546033-1664477053-1.jpg' p1='$449' p2 ='$1299'/>
        </GridItem>
        <GridItem>
        <BestCard Img='https://images.bewakoof.com/t320/gohan-half-sleeve-t-shirt-512884-1655993277-1.jpg' p1='$449' p2 ='$1299'/>
        </GridItem>
        <GridItem>
        <BestCard Img='https://images.bewakoof.com/t320/itachi-of-the-sharingan-oversized-fit-t-shirt-545701-1664380890-1.jpg' p1='$449' p2 ='$1299'/>
        </GridItem>
    </Grid>
    </Box>
  )
}

export default BestSellers