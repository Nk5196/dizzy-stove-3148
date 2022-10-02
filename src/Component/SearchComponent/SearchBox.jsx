import { Flex,Box,Input,Stack,Button,Checkbox,InputGroup,InputLeftElement,Spacer,InputLeftAddon } from '@chakra-ui/react'
import React from 'react'
import { MdLocationPin,MdPerson } from 'react-icons/md';


export default function SearchBox() {
  return (
    <>
    <Box >
            <Flex>
              <InputGroup width="300px" size='lg'>
               <InputLeftElement
              pointerEvents='none'
              children={<MdLocationPin />}
            />
            <Input   border="1px" borderColor='gray.300' boxShadow='md'  placeholder='Mumbai' />
          </InputGroup >
             <Spacer />
             <InputGroup width="275px" size='lg'>
                <InputLeftAddon   children='Check-in' />
                <Input
                      value="2022-09-22"
                      type="date"
                 />
            </InputGroup>
             <Spacer />
             <InputGroup width="285px" size='lg'>
                <InputLeftAddon children='Check-Out' />
                <Input
                  width="250px"
                  value="2022-09-23"
                  type="date"
                 />
            </InputGroup>
            <Spacer/>
            <InputGroup width="280px" size='lg'>
               <InputLeftElement
              pointerEvents='none'
              children={<MdPerson />}
            />
            <Input   border="1px" borderColor='gray.300' boxShadow='md'  placeholder='Travellers' />
          </InputGroup >
           </Flex>

           <Button  marginLeft="41%" my="20px" fontSize="large" py="23px" px="60px" colorScheme='messenger' >Search</Button>

          </Box>
    </>
  )
}
