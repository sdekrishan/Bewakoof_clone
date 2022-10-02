import Navbar from "../Components/Navbar"
import WithSubnavigation from "../Components/MainNavbar"
import { useState } from "react"
import{Box,Image,Button,Input,Grid,GridItem,Text,Center} from '@chakra-ui/react'
import { Navbar1 } from "../Components/MainNavbar"
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
        <Grid templateColumns={'repeat(2,1fr)'} templateRows='520px'>
            <GridItem bgGradient='linear(to-b,white,#FFF9E1,#FFF4C4)'>
                <Text fontSize={'5xl'} fontWeight='500' fontFamily={'monospace'} textAlign='left' >Welcome to the World of Bewakoof!</Text>
                <Image src='https://images.bewakoof.com/web/group-19-1617704502.png' h='70%' ml='5%'/>
            </GridItem>
            <GridItem >
        <Text fontSize={'2xl'} mt='2%' fontWeight='500'>Log In/Sign Up</Text>
        <Text fontSize={'xl'} mt='5%' color='gray'>for Latest trends, exciting offers and everything Bewakoof!</Text>
        <Input border='1px solid black' mt='13%' h='50px' w='350px' placeholder="Enter Mobile Number" onChange={(e)=>setMobile(e.target.value)}/>
        <br/>
        <Button color='white' h='50px' w='350px' mt='2%' bg='#42A2A2' fontSize={'xl'} onClick={handleSubmit}>CONTINUE</Button>

        <Text color='black' fontSize={'xl'} mt='4%' mb='4%'>OR</Text>
        <Center>
        <Grid templateColumns={'repeat(2,100px)'} templateRows={'repeat(2,35px)'} rowGap='7px' columnGap={'7px'}>
            <GridItem border='1px solid black' borderRadius={5} colSpan={2} rowSpan={1}>CONTINUE WITH EMAIL</GridItem>
            <GridItem border='1px solid black' borderRadius={5} colSpan={1} rowSpan={1}>GOOGLE</GridItem>
            <GridItem border='1px solid black' borderRadius={5} colSpan={1} rowSpan={1}>FACEBOOK</GridItem>
        </Grid>
            

        </Center>
        </GridItem>
        </Grid>
        </>
    )
}
export default Login