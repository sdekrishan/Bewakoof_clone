import Navbar from "../Components/Navbar"
import WithSubnavigation from "../Components/MainNavbar"
import { useState } from "react"
import{Box,Image,Button,Input,Grid,GridItem,Text,Center, Flex} from '@chakra-ui/react'
import { Navbar1 } from "../Components/MainNavbar"
import {FcGoogle } from 'react-icons/fc'
import {FaFacebook} from 'react-icons/fa'
import {TfiEmail} from 'react-icons/tfi'


const Login =() =>{
    const arr = JSON.parse(localStorage.getItem('phone')) || [];
    const [mobile,setMobile] = useState(arr);
    const handleSubmit = (e)=>{
        e.preventDefault();
        arr.push(mobile);
        localStorage.setItem('phone',JSON.stringify(arr))
        console.log(arr)

    }
    return (
        <>
        <WithSubnavigation/>
        <Grid h='92vh' templateColumns={'repeat(2,1fr)'}>
            <GridItem bgGradient='linear(to-b,white,#FFF9E1,#FFF4C4)' h='full' position={'relative'}>
                <Text fontSize={'3xl'} fontWeight='800' fontFamily={'montserrat'} textAlign='center' >Welcome to the World of Bewakoof!</Text>
                <Image src='https://images.bewakoof.com/web/group-19-1617704502.png' w='80%' left='10%' position={'absolute'} bottom='10' marginInline={'auto'}/>
            </GridItem>
            <GridItem border={'1px solid black'}>
        <Text fontSize={'2xl'} mt='2%' fontWeight='500'>Log In/Sign Up</Text>
        <Text fontSize={'xl'} mt='5%' color='gray'>for Latest trends, exciting offers and everything Bewakoof!</Text>
        <Input border='1px solid black' mt='13%' h='50px' w='350px' placeholder="Enter Mobile Number" onChange={(e)=>setMobile(e.target.value)}/>
        <br/>
        <Button color='white' h='50px' w='350px' mt='2%' bg='#42A2A2' fontSize={'xl'} onClick={handleSubmit}>CONTINUE</Button>

        <Text color='black' fontSize={'xl'} mt='4%' mb='4%'>OR</Text>
        <Flex flexDirection={'column'} w='60%' justifyContent='center' marginInline={'auto'}>

            <Box >
                <Button bgColor={'white'} border='1px solid grey' w='70%' leftIcon={<TfiEmail/>} >
                    CONTINUE WITH GOOGLE
                </Button>
            </Box>
            <Flex mt='.7rem' justifyContent={'center'}>
                <Button bgColor={'white'} border='1px solid grey' mr='.5rem' leftIcon={<FcGoogle/>}>GOOGLE</Button>
                <Button bgColor={'white'} border='1px solid grey' leftIcon={<FaFacebook/>}>FACEBOOK</Button>
            </Flex>
           
            

        </Flex>
        </GridItem>
        </Grid>
        </>
    )
}
export default Login