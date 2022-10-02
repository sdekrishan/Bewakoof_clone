import React from 'react'
import { Image,Box } from '@chakra-ui/react'
const BelowImage = ({src}) => {
  return (
    <Box size='fll'>
        <Image src={src}/>
    </Box>
  )
}

export default BelowImage