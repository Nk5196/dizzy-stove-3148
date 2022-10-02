import { Box,Flex,Text,Heading,Spacer,Input,Image, HStack } from '@chakra-ui/react'
import React from 'react'
import { TbSwimming } from 'react-icons/tb';


export default function Midbar() {
  return (
    <>
   <Box>
   <Flex>
    <Box mt="12px">
        <Text fontWeight="medium" fontSize="11px">1,369 properties</Text>
        <Heading fontWeight="bold" fontSize="13px">See how we pick our recommended properties</Heading>
    </Box>
    <Spacer/>
    <Input width="250px" mt="10px"  type='Text'  borderColor='gray.400'  boxShadow='md'  border="1px"  borderRadius="8px" size="lg" placeholder='e.g. Best Western'></Input>
   </Flex>


  <Box mt="10px">
     <Flex>
        <Box >
        <Image  boxSize='250px' borderLeftRadius="12" src="https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/1000000/20000/17800/17773/7275694c_b.jpg"/>
        </Box>
        <Box color="black" p="10px">
           <Heading py="2px" fontWeight="bold" fontSize="25px">The Leela Mumbai</Heading>
           <Text fontWeight="medium" fontSize="16px">Mumbai</Text>
           <HStack><TbSwimming size="20px"/><Text fontWeight="medium" fontSize="12px">Pool</Text></HStack>
           <Heading fontWeight="bold" mt="10px" fontSize="12px">Staycation with Your Family</Heading>
           <Text w="300px" fontWeight="medium" fontSize="12px" >Located in Bandra Kurla Complex neighbourhood, The Leela Mumbai is connected to a shopping centre. </Text>
           <Text w="300px" fontWeight="medium" color="teal" mt="10px" fontSize="13px" >Fully refundable </Text>
           <Text w="300px" fontWeight="medium" color="teal" fontSize="13px" >Reserve now. pay later </Text>
           <Text w="300px" mt="5px" fontWeight="semibold" fontSize="14px" >4.6/5 Wonderful (929 reviews)</Text>
           <Box position="relative" bottom="70px" left="280px">
            <Heading size="lg">₹9,900</Heading>
             <Text fontWeight="semibold" fontSize="11px" >
             ₹10,570 total
             </Text>
           </Box>
        </Box> 
     </Flex>
  </Box>
 
  <Box mt="10px">
     <Flex>
        <Box >
        <Image  boxSize='250px' borderLeftRadius="12" src="https://images.trvl-media.com/hotels/20000000/19460000/19458500/19458493/a7678da8.jpg?impolicy=resizecrop&rw=455&ra=fit"/>
        </Box>
        <Box color="black" p="10px">
           <Heading py="2px" fontWeight="bold" fontSize="25px">The Taj Mahal Palace Mumbai</Heading>
           <Text fontWeight="medium" fontSize="16px">Mumbai</Text>
           <HStack><TbSwimming size="20px"/><Text fontWeight="medium" fontSize="12px">Pool</Text></HStack>
           <Heading fontWeight="bold" mt="10px" fontSize="12px">Staycation with Your Family</Heading>
           <Text w="300px" fontWeight="medium" fontSize="12px" >Located in Mumbai neighbourhood, The Leela Mumbai is connected to a shopping centre. </Text>
           <Text w="300px" fontWeight="medium" color="teal" mt="10px" fontSize="13px" >Fully refundable </Text>
           <Text w="300px" fontWeight="medium" color="teal" fontSize="13px" >Reserve now. pay later </Text>
           <Text w="300px" mt="5px" fontWeight="semibold" fontSize="14px" >4.8/5 Wonderful (275 reviews)</Text>
           <Box position="relative" bottom="70px" left="280px">
            <Heading size="lg">₹24,300</Heading>
             <Text fontWeight="semibold" fontSize="11px" >
             ₹28,600 total
             </Text>
           </Box>
        </Box> 
     </Flex>
  </Box>

  <Box mt="-10px">
     <Flex>
        <Box >
        <Image  boxSize='250px' borderLeftRadius="12" src="https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/5000000/4260000/4253900/4253887/0c5cee25_b.jpg"/>
        </Box>
        <Box color="black" p="10px">
           <Heading py="2px" fontWeight="bold" fontSize="25px">Sofitel Mumbai BKC Hotel</Heading>
           <Text fontWeight="medium" fontSize="16px">Mumbai</Text>
           <HStack><TbSwimming size="20px"/><Text fontWeight="medium" fontSize="12px">Pool</Text></HStack>
           <Heading fontWeight="bold" mt="10px" fontSize="12px">Staycation with Your Family</Heading>
           <Text w="300px" fontWeight="medium" fontSize="12px" >Located in Bandra Kurla Complex neighbourhood, Sofitel Mumbai BKC Hotel is connected to a shopping centre. </Text>
           <Text w="300px" fontWeight="medium" color="teal" mt="10px" fontSize="13px" >Fully refundable </Text>
           <Text w="300px" fontWeight="medium" color="teal" fontSize="13px" >Reserve now. pay later </Text>
           <Text w="300px" mt="5px" fontWeight="semibold" fontSize="14px" >4.5/5 Wonderful (852 reviews)</Text>
           <Box position="relative" bottom="70px" left="280px">
            <Heading size="lg">₹11,500</Heading>
             <Text fontWeight="semibold" fontSize="11px" >
             ₹13,570 total
             </Text>
           </Box>
        </Box> 
     </Flex>
  </Box>

  <Box mt="-10px">
     <Flex>
        <Box >
        <Image  boxSize='250px' borderLeftRadius="12" src="https://images.trvl-media.com/hotels/12000000/11550000/11544400/11544400/1b5ae2e3.jpg?impolicy=resizecrop&rw=455&ra=fit"/>
        </Box>
        <Box color="black" p="10px">
           <Heading py="2px" fontWeight="bold" fontSize="25px">Taj Santacruz</Heading>
           <Text fontWeight="medium" fontSize="16px">Mumbai</Text>
           <HStack><TbSwimming size="20px"/><Text fontWeight="medium" fontSize="12px">Pool</Text></HStack>
           <Heading fontWeight="bold" mt="10px" fontSize="12px">Staycation with Your Family</Heading>
           <Text w="300px" fontWeight="medium" fontSize="12px" >Located in Bandra Kurla Complex neighbourhood, Sofitel Mumbai BKC Hotel is connected to a shopping centre. </Text>
           <Text w="300px" fontWeight="medium" color="teal" mt="10px" fontSize="13px" >Fully refundable </Text>
           <Text w="300px" fontWeight="medium" color="teal" fontSize="13px" >Reserve now. pay later </Text>
           <Text w="300px" mt="5px" fontWeight="semibold" fontSize="14px" >4.6/5 Wonderful (343 reviews)</Text>
           <Box position="relative" bottom="70px" left="280px">
            <Heading size="lg">₹10,300</Heading>
             <Text fontWeight="semibold" fontSize="11px" >
             ₹12,890 total
             </Text>
           </Box>
        </Box> 
     </Flex>
  </Box>

  <Box mt="-10px">
     <Flex>
        <Box >
        <Image  boxSize='250px' borderLeftRadius="12" src="https://images.trvl-media.com/hotels/1000000/540000/533800/533762/ed220586.jpg?impolicy=resizecrop&rw=455&ra=fit"/>
        </Box>
        <Box color="black" p="10px">
           <Heading py="2px" fontWeight="bold" fontSize="25px">Grand Hyatt Mumbai Hotel </Heading>
           <Text fontWeight="medium" fontSize="16px">Mumbai</Text>
           <HStack><TbSwimming size="20px"/><Text fontWeight="medium" fontSize="12px">Pool</Text></HStack>
           <Heading fontWeight="bold" mt="10px" fontSize="12px">Staycation with Your Family</Heading>
           <Text w="300px" fontWeight="medium" fontSize="12px" >Located in Bandra Kurla Complex neighbourhood, Sofitel Mumbai BKC Hotel is connected to a shopping centre. </Text>
           <Text w="300px" fontWeight="medium" color="teal" mt="10px" fontSize="13px" >Fully refundable </Text>
           <Text w="300px" fontWeight="medium" color="teal" fontSize="13px" >Reserve now. pay later </Text>
           <Text w="300px" mt="5px" fontWeight="semibold" fontSize="14px" >4.4/5 Wonderful (999 reviews)</Text>
           <Box position="relative" bottom="70px" left="280px">
            <Heading size="lg">₹11,000</Heading>
             <Text fontWeight="semibold" fontSize="11px" >
             ₹12,980 total
             </Text>
           </Box>
        </Box> 
     </Flex>
  </Box>

   </Box>

    </>
  )
}
