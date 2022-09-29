import { Container, Flex, Image,Box, VStack,Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function UsaAd() {
  return (
    <Container  maxW='90%' h="343"  mb="50" p="0" border='1px'borderRadius="12px" borderColor='gray.300' boxShadow='md' mt="60px">
    <Flex>
        <Image  w="50%" src="https://tpc.googlesyndication.com/simgad/4521068674532748792?" borderTopLeftRadius="12px"  borderBottomLeftRadius="12px"></Image>
        <Box>
       <VStack>
        <Image width="130px" position="relative" top="60px" left="-180" src="https://tpc.googlesyndication.com/simgad/5197503855605148686?">
        </Image>
        <Box position="relative" top="60px" left="10px"  mt="90px" p="20px">
            <Heading> Discover USA</Heading>
            <Text>From beaches and national parks to iconic big cities, the USA awaits you.</Text>
        </Box>
       </VStack>
        </Box>
    </Flex>
    </Container>
  )
}
