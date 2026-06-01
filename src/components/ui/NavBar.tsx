import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../../assets/vite.svg'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px' margin='20px'>
        <Image src={logo} boxSize='20px'/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar