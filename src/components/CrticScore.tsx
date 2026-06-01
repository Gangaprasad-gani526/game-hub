import { Badge } from '@chakra-ui/react';
import React from 'react'

interface Props{
    score: number;
}

const CrticScore = ({score}: Props) => {
    let color = score>90? 'green' : score>80? 'yellow': '';
  return (
   <Badge colorPalette= {color} fontSize={'14px'} paddingX={2} borderRadius={'4px'}>{score}</Badge>
  )
}

export default CrticScore
