import React from 'react'
import { Box,Image,Text } from '@chakra-ui/react' 
import './imageScrollBox.css'
const ImageScrollerBox = ({one,two,three,four,five,six,seven,eight,nine,ten,hei,a}) => {
  return (
    <div className='scrollbox' >
        <Box className='box'>
        <Image h={hei} src={one}/>
        <Text>{a}</Text>
        </Box>
       
        <Box className='box'><Image h={hei}src={two}/>
            <Text></Text>
            </Box>
            <Box className='box'><Image h={hei}src={three}/>
            <Text></Text>
            </Box>
            <Box className='box'><Image h={hei} src={four}/>
            <Text></Text>
            </Box>
            <Box className='box'> <Image h={hei} src={five}/>
            <Text></Text>
            </Box>
            <Box className='box'><Image h={hei} src={six}/>
            <Text></Text>
            </Box>
            <Box className='box'><Image h={hei} src={seven}/>
            <Text></Text>
            </Box>
            <Box className='box'><Image h={hei} src={eight}/>
            <Text></Text>
            </Box>
            <Box className='box'> <Image h={hei} src={nine}/>
            <Text></Text>
            </Box>
            <Box className='box'><Image h={hei} src={ten}/>
            <Text></Text>
            </Box>
        
        
       
        
        
        
       
        
    </div>
  )
}

export default ImageScrollerBox