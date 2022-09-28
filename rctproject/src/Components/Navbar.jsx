import {Flex,Text} from '@chakra-ui/react'

const Navbar=()=>{
    return (
        <>
        <Flex h='25' maxW='full' alignItems={'center'} bg='gray.200' fontSize={'xs'} justify={'space-between'}>
            <Flex w='400px' ml='10' justify='space-evenly'>
                <Text>Offers</Text>
                <Text>Fanbook</Text>
                <Text>Download App</Text>
                <Text>TriBe Membership</Text>
            </Flex>
            <Flex w='200px' mr='10' justify='space-evenly' >
                <Text>Contact Us</Text>
                <Text>Track Order</Text>
            </Flex>
        </Flex>
        </>
    )
}
export default Navbar