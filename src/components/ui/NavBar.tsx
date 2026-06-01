import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../../assets/vite.svg'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from '../SearchInput'

const NavBar = () => {
  return (
    <HStack padding='10px' margin='20px'>
        <Image src={logo} boxSize='20px'/>
        <SearchInput/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar