import React, {useState } from 'react'
import { Container,Tabs, TabList,Box,Spacer, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Flex,Input,Stack,Checkbox,Button,InputGroup,InputLeftElement,InputLeftAddon } from '@chakra-ui/react'
import { MdLocationPin,MdPerson } from 'react-icons/md';


export default function TabForSearchTAb() {
   
  return (
    <Container maxW='90%' border='1px'borderRadius="12px" borderColor='gray.300' boxShadow='md' mt="60px">
    <Tabs mt="20px">
    <TabList  justifyContent="center">
      <Tab fontWeight="semibold">Stays</Tab>
      <Tab fontWeight="semibold">Flights</Tab>
      <Tab fontWeight="semibold">Cars</Tab>
      <Tab fontWeight="semibold">Packages</Tab>
      <Tab fontWeight="semibold">Things to do</Tab>
    </TabList>

    <TabPanels>
      <TabPanel>
          <Box >
            <Flex>
              <InputGroup width="300px" size='lg'>
               <InputLeftElement
              pointerEvents='none'
              children={<MdLocationPin />}
            />
            <Input   border="1px" borderColor='gray.300' boxShadow='md'  placeholder='Going to' />
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
           <Stack spacing={70} mt="20px" direction='row'>
                <Checkbox >
                Add a flight
                </Checkbox>
                <Checkbox >
                Add a car
                </Checkbox>
           </Stack>
           
           <Button marginLeft="41%" my="20px" fontSize="large" py="23px" px="60px" colorScheme='messenger' >Search</Button>
          
          </Box>
      </TabPanel>
      
      <TabPanel>
      <Box>
            <Flex>
              <InputGroup width="300px" size='lg'>
               <InputLeftElement
              pointerEvents='none'
              children={<MdLocationPin />}
            />
            <Input   border="1px" borderColor='gray.300' boxShadow='md'  placeholder='Leaving from' />
          </InputGroup >
             <Spacer />
             <InputGroup width="300px" size='lg'>
               <InputLeftElement
              pointerEvents='none'
              children={<MdLocationPin />}
            />
            <Input   border="1px" borderColor='gray.300' boxShadow='md'  placeholder='Going to' />
          </InputGroup >
             <Spacer />
             <InputGroup width="285px" size='lg'>
                <InputLeftAddon children='Check-Out' />
                <Input
                  width="250px"
                  value="2022-09-23"
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
          </Flex>
          
           <Button marginLeft="41%" my="20px" fontSize="large" py="23px" px="60px" colorScheme='messenger' >Search</Button>
          
          </Box>
      </TabPanel>

      <TabPanel>
        <p>three!</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
  </Container>
  )
}
