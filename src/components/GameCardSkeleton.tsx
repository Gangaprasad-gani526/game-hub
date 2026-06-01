
import { Card, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
   <Card.Root  width={'300px'} borderRadius={10} overflow={'hidden'}  height={'300px'}>
    <Skeleton>
       <Card.Body>
        <SkeletonText/>
       </Card.Body>
    </Skeleton>
   </Card.Root>
  )
}

export default GameCardSkeleton