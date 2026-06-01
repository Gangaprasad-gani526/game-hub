import type { Game } from '@/hooks/useGames'
import { Image, Card, CardBody, Heading } from '@chakra-ui/react'

interface Props{
    game:Game
}

const GameCard = ({game}:Props) => {
  return (

    <Card.Root borderRadius={10} overflow='hidden' >
        <Image src={game.background_image}/>
        <Card.Body>
            <Card.Header>
                <Heading fontSize="xl">Your Title Here{game.name}</Heading></Card.Header>
        </Card.Body>

    </Card.Root>
  )
}

export default GameCard