
import React from 'react'
import { BiArrowBack } from 'react-icons/bi';
import {Link} from "react-router-dom"
import { Box, Checkbox,Text, Container,Flex, Spacer, Heading, Input, VStack, Button } from '@chakra-ui/react'

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useContext, useState } from "react";
import axios from "axios";

import { loading } from '../Context/action';
import { success } from "../Context/action";
import { AuthContext } from '../Context/AuthContextProvider';
import XpediaIcon from '../icon/xpedia';


export default function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

  const handleSubmit = (event) => {
    event.preventDefault();
    let users = {
      email: email,
      password: password
    };
    navigate("/");
  }

  return (
  <>
    <Flex borderBottom='1px' pb="5px" borderColor='gray.300' justifyContent="center" px="15px" mt="5px">
      <Box mt="13px" ><Link to="/" ><BiArrowBack/></Link> </Box>
        <Spacer/>
       <XpediaIcon></XpediaIcon>
        <Spacer/>
        <Box></Box>
    </Flex>
    <Box>
    <Container position="relative" right="-30px" my="50px" h="520px"  maxWidth="30%">
        <VStack gap={2}>
            <Heading position="relative" right="130px" fontWeight="semibold"  >Sign in</Heading>
             <Input  type='email' onChange={(event) => setEmail(event.target.value) }  borderColor='gray.300'  boxShadow='md'  border="1px"  borderRadius="8px" size="lg" placeholder='Email Address'></Input>
             <Input type='password'  onChange={(event) => setPassword(event.target.value) } borderColor='gray.300'  boxShadow='md'  border="1px"  borderRadius="8px" size="lg" placeholder='Password'></Input>
             <Box  position="relative" top="5px" right="115px">
             <Checkbox  borderColor='gray.300' >Keep me Sign In</Checkbox>
             </Box>
             <Text py="5px"  fontSize="11px">Selecting this checkbox will keep you signed into your account on this device until you sign out. Do not select this on shared devices.</Text>
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
               <Button onClick={handleSubmit}  marginLeft="41%" my="20px" fontSize="large" py="23px" w="full" colorScheme='messenger' >Sign in</Button>
               <Link  fontSize="15px" style={{color:"blue",paddingLeft:"5px"}} href='#'>
                  Forgot password?
                   </Link>
                   <Text fontSize="15px" px="3px"> Don't have an account?
                   <Link style={{color:"blue",paddingLeft:"5px"}} to="/signup">
                     Create one
                   </Link>
                   </Text>
            </VStack> 
    </Container>
    </Box>
    </>
     )
}
