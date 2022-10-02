import { Box, Container, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import Footer from '../Component/Footer'
import Navbar from '../Component/Navbar'
import LeftSideBar from '../Component/SearchComponent/LeftSideBar'
import Midbar from '../Component/SearchComponent/Midbar'
import RightSideAD from '../Component/SearchComponent/RightSideAD'
import SearchBox from '../Component/SearchComponent/SearchBox'

export default function Search() {
  return (
    <>
    <Navbar/>
    <Box>
    <Container mt="15px" maxW="90%">
    <Grid
  templateAreas={`"header header main"
                  "nav footer main"
                  "nav footer main"`}
  gridTemplateRows={'120px 1fr 30px'}
  gridTemplateColumns={'250px 1fr 170px'}
  h='200px'
  gap='3'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pl='2'  area={'header'}>
    <SearchBox/>
  </GridItem>
  <GridItem pl='2' area={'nav'}>
    <LeftSideBar/>
  </GridItem>
  <GridItem pl='2' bg='' area={'main'}>
    <RightSideAD/>
  </GridItem>
  <GridItem pl='2' area={'footer'}>
    <Midbar/>
  </GridItem>
</Grid>
</Container> 
</Box>

<Box borderTop="1px"  borderColor='gray.400' position="relative" top="1450px">
<Footer/>
</Box>
 </>
  )
}
