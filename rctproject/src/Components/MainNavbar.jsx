import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Center,
    Icon,
    
    Image,
    Input,
    Tabs, TabList, TabPanels, Tab, TabPanel
  } from '@chakra-ui/react';
  
 import { Link } from 'react-router-dom';
  
  export default function WithSubnavigation() {
    
    return (
      <Box size='full' display='flex' align='center' justify='center' h='50px'>
        <Image src='https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg' w='150px' ml='5%' alt='bewakoof'></Image>
        <Flex justify={'space-between'} align='center' w='xs' ml='4%'>
        <Link to='/men-clothing' >MEN</Link>
        <Link to='/women-clothing'>WOMEN</Link>
        <Link to='/mobile-covers-india' >MOBILE COVERS</Link>
        </Flex>
        <Flex justify={'space-between'} ml='15%' align='center' w='sm' >
            
        <Input w='sm' placeholder='Search by product, category or collection' ml='5%' fontSize={'xs'}/>
        <Link to='/login' ml='5%'>Login</Link>
        <Image src='https://images.bewakoof.com/web/india-flag-round-1639566913.png' w='30px'  ml='5%' alt='love'/>
        </Flex>
        
      </Box>
    )
}

const Navbar1=() =>{
 
 return (
    <Center>
 <Tabs size='lg' >
  <TabList gap={'20px'}>
    <Tab _selected={{borderBottom:"3px solid yellow",fontWeight:'500',fontsize:'lg'}}  >MEN</Tab>
    <Tab _selected={{borderBottom:"3px solid yellow",fontWeight:'500',fontsize:'lg'}}>WOMEN</Tab>
    <Tab _selected={{borderBottom:"3px solid yellow",fontWeight:'500',fontsize:'lg'}}>ACCESORIES</Tab>
  </TabList>
  
</Tabs>
</Center>
)
}
export {Navbar1}