import React from 'react'
import {Grid,GridItem,Image,Box,Text} from '@chakra-ui/react'
const Popular = ({one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve}) => (
    <Box mt='2%' >
    <Text fontSize='xl' fontWeight={'500'}>POPULAR CATEGORIES</Text>
    <Grid templateColumns='repeat(6,1fr)' templateRows='repeat(2,300px)'>
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
        <GridItem>
            <Image src={five} />
        </GridItem>
        <GridItem>
            <Image src={six}/>
        </GridItem>
        <GridItem>
            <Image src={seven}/>
        </GridItem>
        <GridItem>
            <Image src={eight}/>
        </GridItem>
        <GridItem>
            <Image src={nine}/>
        </GridItem>
        <GridItem>
            <Image src={ten}/>
        </GridItem>
        <GridItem>
            <Image src={eleven}/>
        </GridItem>
        <GridItem>
            <Image src={twelve}/>
        </GridItem>
    
    </Grid>
    </Box>
)

export default Popular