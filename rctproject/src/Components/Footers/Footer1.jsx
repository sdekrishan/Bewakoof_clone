import {Box,Grid,GridItem,Text,Input,Image,Button,Divider} from '@chakra-ui/react'

import React from 'react'

const Footer1 = () => {
  return (
<Box size='full' border={'1px solid black'} pl='2%' pr='2%' pt='5%' pb='2%' bg='black' >
        <Grid templateColumns={'repeat(4,1fr)'}>
            <GridItem color='white'>
            <Text color={'yellow'}>CUSTOMER SERVICE</Text>
            <Text >Contact Us</Text>
            <Text>Track Order</Text>
            <Text>Return Order</Text>
            <Text>Cancel Order</Text>

            <Text mt='15%'>15 Days Return Policy*</Text>
            <Text>Cash On Delivery</Text>
            </GridItem>
            <GridItem color='white'>
            <Text color={'yellow'}>COMPANY</Text>
            <Text>About Us</Text>
            <Text>We're Hiring</Text>
            <Text>Terms & Conditions</Text>
            <Text>Privacy Policy</Text>
            <Text>Blog</Text>

            <Text mt='15%' color={'yellow'}>Download The App</Text>
            <Box display={'flex'}>
                <Image src='https://wallpapercave.com/wp/wp2860538.jpg' h='100px'/>
            </Box>
            </GridItem>
            <GridItem color='white'>
            <Text color={'yellow'}>CONTACT WITH US</Text>
            <Text>4.7 million People like this</Text>
            <Text>1 million Followers</Text>
            <Text color={'yellow'} mt='39%'>100% Secure Payment</Text>
            <Image src='https://images.bewakoof.com/web/secure-payments-image.png   '/>
            </GridItem>
            <GridItem color='white' >
            <Text color={'yellow'}>KEEP UP TO DATE</Text>
            <Box display={'flex'}>
            <Input placeholder='Enter Email Id' mt='10%' borderBottom={'1px solid yellow'}/>
            <Button bg='yellow' color='black'mt='10%'>Subscribe</Button>
            </Box>
            
            </GridItem>

        </Grid>
        <Divider h='2px' bg='white' />
{/* 
        <Grid templateColumns={'repeat(4,1fr)'}>
            <GridItem>
                <Text fontSize={'24px'}>Mens's Clothing</Text>
                <Text>Top Wear</Text>
                <Text>Men's New Arrivals</Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
            </GridItem>
        </Grid> */}
    </Box>
  )
}

export default Footer1