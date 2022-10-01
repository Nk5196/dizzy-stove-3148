import {Image} from "@chakra-ui/react"
import {Link} from "react-router-dom"
function XpediaIcon(){
    return (<>
          <Link to="/">
            <Image w="150px" p="7px" 
             src={"https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2"}/>
         </Link>  </> )
}

export default XpediaIcon;