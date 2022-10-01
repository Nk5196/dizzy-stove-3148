import { Box,Flex,Spacer, Image, Checkbox,Text, Container, Heading, Input, VStack, Button } from '@chakra-ui/react';
import React from 'react'
import { BiArrowBack } from 'react-icons/bi';
import {Link} from "react-router-dom"
import XpediaIcon from '../icon/xpedia';

export default function SignupPage() {
  return (<>
    <Flex borderBottom='1px' pb="5px" borderColor='gray.300' justifyContent="center" px="15px" mt="5px">
      <Box mt="13px" ><Link to="/login" ><BiArrowBack/></Link> </Box>
        <Spacer/>
        <XpediaIcon/>
        <Spacer/>
        <Box></Box>
    </Flex>
    <Box>
    <Container position="relative" right="-30px" my="30px"   maxWidth="30%">
        <VStack gap={2}>
            <Heading position="relative" right="40px" fontWeight="semibold">Create an account</Heading>
             <Input borderColor='gray.300'  boxShadow='md'  border="1px"  borderRadius="8px" size="lg" placeholder='Email Address'></Input>
             <Input borderColor='gray.300'  boxShadow='md'  border="1px"  borderRadius="8px" size="lg" placeholder='First name'></Input>
             <Input borderColor='gray.300'  boxShadow='md'  border="1px"  borderRadius="8px" size="lg" placeholder='Surname'></Input>
             <Input borderColor='gray.300'  boxShadow='md'  border="1px"  borderRadius="8px" size="lg" placeholder='Password'></Input>
             <Box  position="relative" top="5px" right="115px">
             <Checkbox  borderColor='gray.300' >Keep me Sign In</Checkbox>
             </Box>
             <Text  fontSize="11px">Selecting this checkbox will keep you signed into your account on this device until you sign out. Do not select this on shared devices.</Text>
             <Box  position="relative" top="5px" >
             <Checkbox  borderColor='gray.300'>I'd like to receive travel deals, special offers and other information from Expedia via email.</Checkbox>
             </Box>
             <Text  fontSize="13px">
             By signing in, I agree to the Expedia{' '}
                   <Link style={{color:"blue",paddingLeft:"5px"}} href='#'>
                   Terms and Conditions,
                   </Link>
                   <Link color='blue.500' href='#'>
                   Privacy Statement 
                   </Link>and  <Link  style={{color:"blue",paddingLeft:"5px"}} href='#'>
                   Expedia Rewards Terms and Conditions.
                   </Link>
               </Text>
               <Button marginLeft="41%" my="20px" fontSize="large" py="23px" w="full" colorScheme='messenger' >Sign in</Button>
               <Link  fontSize="15px" style={{color:"blue",paddingLeft:"5px"}} href='#'>
                  Forgot password?
                   </Link>
                   <Text fontSize="15px" px="3px"> Already have an account? 
                   <Link style={{color:"blue",paddingLeft:"5px"}} to="/login">
                     Sign in
                   </Link>
                   </Text>
            </VStack> 
    </Container>
    </Box>
    </>)
}
