import {Box,Button,Container,Flex,HStack,Heading,Icon,Menu,MenuButton,MenuItem,MenuList,} from "@chakra-ui/react";
import {FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import {FaBars} from "react-icons/fa"
import SignUpPage from "../components/Signup/Signup";
const TopNav = ({title,onOpen}) => {
  return (
    <Box px="4" bg="white">
      <HStack maxW="70rem" h="16" justify="space-between" mx="auto">
      <Icon as={FaBars} cursor="pointer" onClick={onOpen} display={{
        base: "block",
        lg: "none",
      }}/>
        
        <Heading fontWeight="medium" fontSize="28px">{title}</Heading>
        <Menu>
            <MenuButton><Icon as={FaRegUserCircle} fontSize="28px"/></MenuButton>
            <MenuList>
            <MenuItem>
              <Link to="/signup">Sign up</Link>
            </MenuItem>

            <MenuItem>Support</MenuItem>
            
            </MenuList>
        </Menu>
      
  </HStack>
    </Box>
  )
}

export default TopNav