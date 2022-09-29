import { Box, Checkbox,Text, Container, Heading, Input, VStack, Link, Button } from '@chakra-ui/react'
import React from 'react'

export default function LoginContainer() {
  return (
    <Container position="relative" right="-30px" my="50px" h="520px"  maxWidth="30%">
        <VStack gap={2}>
            <Heading position="relative" right="130px" fontWeight="semibold"  >Sign in</Heading>
             <Input borderColor='gray.300'  boxShadow='md'  border="1px"  borderRadius="8px" size="lg" placeholder='Email Address'></Input>
             <Input borderColor='gray.300'  boxShadow='md'  border="1px"  borderRadius="8px" size="lg" placeholder='Password'></Input>
             <Box  position="relative" top="5px" right="115px">
             <Checkbox  borderColor='gray.300' >Keep me Sign In</Checkbox>
             </Box>
             <Text py="5px"  fontSize="11px">Selecting this checkbox will keep you signed into your account on this device until you sign out. Do not select this on shared devices.</Text>
             <Text  fontSize="13px">
             By signing in, I agree to the Expedia{' '}
                   <Link color='blue.500' href='#'>
                   Terms and Conditions,
                   </Link>
                   <Link color='blue.500' href='#'>
                   Privacy Statement 
                   </Link>and  <Link color='blue.500' href='#'>
                   Expedia Rewards Terms and Conditions.
                   </Link>
               </Text>
               <Button marginLeft="41%" my="20px" fontSize="large" py="23px" w="full" colorScheme='messenger' >Sign in</Button>
               <Link  fontSize="15px" color='blue.500' href='#'>
                  Forgot password?
                   </Link>
                   <Text fontSize="15px"> Don't have an account?
                   <Link color='blue.500' href='#'>
                     Create one
                   </Link>
                   </Text>
            </VStack> 
    </Container>
  )
}
