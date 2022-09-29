import React from 'react'
import { Box,Image,Container,Text,Spacer,Button, Heading, Flex } from '@chakra-ui/react'


export default function Banner2Ad() {
  return (
    <Flex gap='20'>
    <Box marginLeft="65px"  width="860px" h="250" mb="10" p="0" border='1px'borderRadius="12px" borderColor='gray.300' boxShadow='md' mt="0px">
       
        <Box 
             backgroundImage="url('https://a.travel-assets.com/travel-assets-manager/gmvd-1482-bookearly-emea/667x320.jpg')"
             backgroundSize="cover"
             backgroundPosition="center"
             backgroundRepeat="no-repeat"
             height="100%"
            
             position="relative"
             borderRadius="12px"
             
              >
         <Box w="250px" position= "absolute"
                 top= "68%"
                 left="5% "color="white">
          <Heading size="sm"  color="white">
           Plan ahead and save
          </Heading>
          <Text >
                 Book 60 days in advance for 20% off select stays.
          </Text>
        
          </Box>
        </Box>
        <Spacer />
        <Box>
      </Box>
    </Box>
    <Box  marginRight="65px" width="320px" h="250" mb="10" p="0" border='1px'borderRadius="12px" borderColor='gray.300' boxShadow='md' mt="0px">
    <Box 
             backgroundImage="url('https://tpc.googlesyndication.com/simgad/9694300187526983539?')"
             backgroundSize="cover"
             backgroundPosition="center"
             backgroundRepeat="no-repeat"
             height="100%"
            
             position="relative"
             borderRadius="12px"
             
              >
         <Box w="250px" position= "absolute"
                 top= "68%"
                 left="5% "color="white">
          </Box>
        </Box>
    </Box>
    </Flex>
  )
}
