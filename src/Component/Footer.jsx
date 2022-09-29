import React from 'react'
import { Container,HStack,Box,Link,Image,Text, Grid, GridItem, Heading, VStack, Flex, Stack } from '@chakra-ui/react'
// import {   } from "react-router-dom";


export default function Footer() {
  return (<>
 <Container  maxW='90%' p="0" borderBottom='1px' borderColor='gray.300'  mt="50px">
   <Box p="10px" textAlign="center" >
    <Heading fontWeight="semibold" size="15px">Explore a world of travel with Expedia</Heading>
     <Link fontSize="14px" color='blue.500'>Discover new places and experiences</Link>
   </Box>
   <Box>
   <HStack spacing='24px' h="300" p="10px">
  <Box p="12px" w="19%" h="100%" >
   <Image src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg"></Image>
  </Box>
  <Box w="19%"h="100%" >
    <VStack pl="5px" alignItems="start">
        <Heading  fontWeight="semibold" size="15px">Company</Heading>
        <Link fontSize="14px" color='blue.500'>About us</Link>
        <Link fontSize="14px" color='blue.500'>Jobs</Link>
        <Link fontSize="14px" color='blue.500'>List your property</Link>
        <Link fontSize="14px" color='blue.500'>Partnership</Link>
    </VStack>
  </Box>
  <Box w="19%" h="100%" >
  <VStack pl="5px" alignItems="start">
        <Heading  fontWeight="semibold" size="15px">Explore</Heading>
        <Link fontSize="14px" color='blue.500'>India travel guide</Link>
        <Link fontSize="14px" color='blue.500'>Hotels in India</Link>
        <Link fontSize="14px" color='blue.500'>List your property</Link>
        <Link fontSize="14px" color='blue.500'>Holiday package in India</Link>
        <Link fontSize="14px" color='blue.500'>Domestic flights</Link>
        <Link fontSize="14px" color='blue.500'>Car hire in India</Link>
        <Link fontSize="14px" color='blue.500'>All accommodation types</Link>
        <Link fontSize="14px" color='blue.500'>Travel blog</Link>
    </VStack>
  </Box>
  <Box w="19%" h="100%" >
  <VStack pl="5px" alignItems="start">
        <Heading  fontWeight="semibold" size="15px">Policies</Heading>
        <Link fontSize="14px" color='blue.500'>Privacy Statement</Link>
        <Link fontSize="14px" color='blue.500'>Terms of use</Link>
        <Link fontSize="14px" color='blue.500'>Vrbo terms and conditions</Link> 
   </VStack>
  </Box>
  <Box w="19%" h="100%" >
  <VStack pl="5px" alignItems="start">
        <Heading  fontWeight="semibold" size="15px">Help</Heading>
        <Link fontSize="14px" color='blue.500'>Change or cancel your booking</Link>
        <Link fontSize="14px" color='blue.500'>Refund process and timelines</Link>
        <Link fontSize="14px" color='blue.500'>International travel documents</Link> 
        <Link fontSize="14px" color='blue.500'>Car hire in India</Link>
   </VStack>
  </Box>
</HStack>
   </Box>
</Container> 
<Box w="100%" p="20px" alignItems="center" >
  <Image 
  marginLeft="48%"   w="200px"  src="https://images.trvl-media.com/media/content/expind/images/sg/secure.png"></Image>
  <Text fontSize="11px" textAlign="center">© 2022 Expedia, Inc., an Expedia Group company. All rights reserved. Expedia and the Airplane Logo are trademarks or registered trademarks of Expedia, Inc.</Text>

</Box>

 </> )
}
