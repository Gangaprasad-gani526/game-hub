import type { Game } from '@/hooks/useGames'
import { Image, Card, Heading, HStack } from '@chakra-ui/react'
import PlatformIconList from '../PlatformIconList'
import CrticScore from '../CrticScore'
import getCropImageURL from '@/services/image-url'

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (

    <Card.Root borderRadius={10} overflow='hidden' width={'100%'} height={'400px'} >
      <Image src={getCropImageURL(game.background_image)}  />
      <Card.Body>
        <Card.Header>
          <Heading fontSize="xl">Your Title Here{game.name}</Heading></Card.Header>
        <HStack justifyContent={'space-between'}>
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
          <CrticScore score={game.metacritic} />
        </HStack>

      </Card.Body>

    </Card.Root>
  )
}

export default GameCard