import { Box,Image,Container,Text,Button, Heading } from '@chakra-ui/react'
import React from 'react'


export default function ImageBanner() {
  return (
    <>
    <Container  maxW='90%' h="450" mb="10" p="0" border='1px'borderRadius="12px" borderColor='gray.300' boxShadow='md' mt="60px">
        <Box 
             backgroundImage="url('https://a.travel-assets.com/travel-assets-manager/cmct-5255/POSa-HP-Hero-D-928x398.jpg')"
             backgroundSize="cover"
             backgroundPosition="center"
             backgroundRepeat="no-repeat"
             height="100%"
             
             position="relative"
             borderRadius="12px"
             
              >
         <Box w="250px" position= "absolute"
                 top= "18%"
                 left="5% "color="white">
          <Heading  color="white">
             Save instantly with Expedia Rewards
          </Heading>
          <Text >
          You can enjoy access to perks like Member Prices, saving an average of 15% on thousands of hotels. Terms may apply.
          </Text>
          <Button mt="15px" fontSize="large" py="23px" px="60px" colorScheme='messenger' >See Menber Prices</Button>
          </Box>
        </Box>
      
    </Container>
    </>
 )
}
