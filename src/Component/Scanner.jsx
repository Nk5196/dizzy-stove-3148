import { Container,Box, VStack } from '@chakra-ui/react'
import React from 'react'
import { Flex,Center,Text,Image,Heading ,Button,InputGroup,Input,InputLeftAddon, Spacer} from '@chakra-ui/react'

export default function Scanner() {
  return (
    <Container  maxW='90%' mb="250" p="0" border='1px'borderRadius="12px" borderColor='gray.300' boxShadow='md' mt="60px">
       <Flex color='white' >
            <Center w='440px' >
              <Image src="https://a.travel-assets.com/mad-service/footer/bnaBanners/BEX_ROME_iStock_72dpi.jpg"/>
            </Center>
           <Box w='580px'  >
              <VStack
                 spacing={4}
                 align='stretch'
               >
                 <Box px="15px" mt="15px" color="black" >
                   <Heading mt="5px" size='xl' fontWeight="semibold">Our app takes you further</Heading>
                    <Text mt="5px" lineHeight="5">When you book on the app you can save even more — up to 20% on select hotels while earning double the points with every booking. With these app deals you'll save even more on trips, and that means you can take more trips, and manage it all on the go.</Text>
                 </Box >
                 <Box p="15px" color="black" >
                 <Heading size="md" fontWeight="semibold">Text yourself a download link for easy access</Heading>
                 <Flex mt="12px" spacing="5px">
                   <InputGroup size='lg' w="130px">
                       <InputLeftAddon children='+91' />
                       <Input  type='tel' placeholder='Country Code' />
                   </InputGroup>
                    <Spacer />
                    <InputGroup size='lg' >
                       <Input type='tel' placeholder='Phone Number' />
                   </InputGroup>
                    <Spacer />
                    <Button  fontSize="large" py="23px" px="60px" colorScheme='messenger' >Get the App</Button>
                  </Flex>
                  <Text  p="5px" color="black" fontSize="12px">By providing your number, you agree to receive a one-time automated text message with a link to get the app. Standard text message rates may apply.</Text>
                 </Box>
             </VStack>
            </Box>
            <Box flex='1' >
            <Center mt="35">
              <Image src="https://a.travel-assets.com/mad-service/qr-code/footer_qr_hp/27_QR_FOOTER_BNA_HP.png"/>
              </Center>
            <Text size="md">Scan this QR Code</Text>
            </Box>
       </Flex>
    </Container>
  )
}
