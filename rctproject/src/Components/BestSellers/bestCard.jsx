import { Image,Box,Text } from '@chakra-ui/react'
import React from 'react'

const BestCard = ({Img,p1,p2}) => {
  return (
    <Box display={'flex'} flexDir='column' >
        <Image src={Img} />
            <Box display={'flex'} flexDir='row'>
                <Text fontWeight={'500'} mr='20px'>{p1}</Text>
                <Text>{p2}</Text>
            </Box>
        
    </Box>
  )
}

export default BestCard