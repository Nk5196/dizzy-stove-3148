import { VStack,Box,Image,Text, Heading,Input } from '@chakra-ui/react'
import React from 'react'
import { Checkbox, CheckboxGroup,Stack } from '@chakra-ui/react'
export default function LeftSideBar() {
  return (
    <>
    <VStack  py="4px"
             padding="2px"
             align='stretch'>
           <Box p="3px">
             <Image w="full" h="130px" src="https://maps.googleapis.com/maps/api/staticmap?channel=expedia-HotelInformation&maptype=roadmap&format=jpg&zoom=&size=600x400&markers=icon:https://a.travel-assets.com/shopping-pwa/images/his-preview-marker.png%7C19.134901,72.900539%7C19.173413,72.860695%7C19.09489,72.853811%7C19.103344,72.8874%7C19.157431,72.937516%7C19.113362,72.863894%7C19.099724,72.874423%7C19.06663,72.867347%7C19.1177,72.86475%7C19.173662,72.846194&key=AIzaSyCYjQus5kCufOpSj932jFoR_AJiL9yiwOw&signature=C_L_iO87Gg_WG9GOgDtDKg3E5y0="/>
             <Text p="4px" fontWeight='normal' textAlign="center" fontSize="13px" color="blue.600">View in a map</Text>
           </Box>
           <Box py="25px" borderTop="1px"  borderBottom="1px" borderColor='gray.600' >
            <Heading color="black" fontWeight="semibold" size="md">Search by property name</Heading>
            <Input mt="10px"  type='Text'  borderColor='gray.400'  boxShadow='md'  border="1px"  borderRadius="8px" size="lg" placeholder='e.g. Best Western'></Input>

           </Box>
           <Box >
             <Heading mb="20px" fontWeight="semibold" size="md">Filter by</Heading>
             <Heading mb="10px" fontWeight="semibold" size="sm">Popular filters</Heading>
             <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
              <Stack spacing={2} borderColor='gray.800' fontWeight="400" >
                <Checkbox borderColor='gray.300' >Breakfast included</Checkbox>
                <Checkbox borderColor='gray.300' >Free airport shuttle</Checkbox>
                <Checkbox borderColor='gray.300' >Free cancellation</Checkbox>
                <Checkbox borderColor='gray.300' >Juhu Beach</Checkbox>
                <Checkbox borderColor='gray.300' >Hot tub</Checkbox>
              </Stack>
             </CheckboxGroup>
           </Box>

           <Box>
             <Heading  marginTop="20px" mb="10px" fontWeight="semibold" size="sm">Price per night</Heading>
             <CheckboxGroup colorScheme='blue'>
              <Stack spacing={2} borderColor='gray.800' fontWeight="400" >
                <Checkbox borderColor='gray.300' >Less than ₹2,000</Checkbox>
                <Checkbox borderColor='gray.300' >₹2,000 to ₹4,000</Checkbox>
                <Checkbox borderColor='gray.300' >₹4,000 to ₹8,000</Checkbox>
                <Checkbox borderColor='gray.300' >₹8,000 to ₹11,000</Checkbox>
                <Checkbox borderColor='gray.300' >Greater than ₹11,000</Checkbox>
              </Stack>
             </CheckboxGroup>
           </Box>

           <Box mt="30px">
             <Heading marginTop="20px" mb="10px" fontWeight="semibold" size="sm">Payment type</Heading>
             <CheckboxGroup colorScheme='blue'>
              <Stack spacing={2} borderColor='gray.800' fontWeight="400" >
                <Checkbox borderColor='gray.300' >Fully refundable</Checkbox>
                <Checkbox borderColor='gray.300' >Reserve now, pay later</Checkbox>
              </Stack>
             </CheckboxGroup>
           </Box>

           <Box mt="30px">
             <Heading marginTop="20px" mb="10px" fontWeight="semibold" size="sm">Property type</Heading>
             <CheckboxGroup colorScheme='blue'>
              <Stack spacing={2} borderColor='gray.800' fontWeight="400" >
                <Checkbox borderColor='gray.300' >Apart-hotel</Checkbox>
                <Checkbox borderColor='gray.300' >Villa</Checkbox>
                <Checkbox borderColor='gray.300' >Hotel</Checkbox>
              </Stack>
             </CheckboxGroup>
           </Box>

    </VStack>

    </>
  )
}
