import { Flex,Box,Image, LinkBox, Spacer, Container } from '@chakra-ui/react'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi';
import {Link} from "react-router-dom"
import LoginContainer from '../Component/Login/LoginContainer';
export default function Login() {
  return (
  <>
    <Flex borderBottom='1px' pb="5px" borderColor='gray.300' justifyContent="center" px="15px" mt="5px">
      <Box padding="8px" ><Link  ><BiArrowBack/></Link> </Box>
        <Spacer/>
        <Image  justifySelf="center" src="https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2"></Image>
        <Spacer/>
        <Box></Box>
    </Flex>
    <Box>
       <LoginContainer/>
    </Box>
    </>
     )
}
