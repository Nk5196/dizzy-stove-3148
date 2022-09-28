
import { Flex, Spacer, Box, Button, HStack} from '@chakra-ui/react'
import {Link} from "react-router-dom"
import { GrFormDown } from "react-icons/gr"
import { BiBuildingHouse } from "react-icons/bi"
import { MdFlight, MdLuggage, MdOutlineLocalActivity } from "react-icons/md"
import { AiFillCar } from "react-icons/ai"
import { TbWorld } from "react-icons/tb"
import { BsFillBellFill } from "react-icons/bs"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
 } from '@chakra-ui/react'
import XpediaIcon from '../icon/xpedia'

function Navbar() {
  return (
    <Box m="15px" px="30px">
      <Flex>
        <HStack px="10px">
      <Link p='4'>
     <XpediaIcon mr="15px"/>
  </Link>
  <Menu>
  <MenuButton as={Button} rightIcon={<GrFormDown/>}>
   More Travel
  </MenuButton>
  <MenuList>
    <MenuItem icon={<BiBuildingHouse />}>Stays</MenuItem>
    <MenuItem icon={<MdFlight />}>Flights</MenuItem>
    <MenuItem icon={<AiFillCar />}>Cars</MenuItem>
    <MenuItem icon={<MdLuggage />}>Packages</MenuItem>
    <MenuItem icon={<MdOutlineLocalActivity />}>Holiday activities</MenuItem>
    <MenuItem>Deals</MenuItem>
    <MenuItem>Groups and Meetings</MenuItem>
    <MenuItem>Mobiles</MenuItem>
  </MenuList>
</Menu>
  </HStack>
  <Spacer />
  <Box padding="5px" spacing='24px'>
  <Link style={{padding:"10px"}} icon={<TbWorld />}>English</Link>
    <Link style={{padding:"10px"}}>Support</Link>
    <Link style={{padding:"10px"}}>Trips</Link>
    {/* <span style={{padding:"10px"}} ><BsFillBellFill /></span> */}
    <Link style={{padding:"10px"}}>Sign In</Link>
  </Box>
      </Flex>
    </Box>
  )
}

export default Navbar;