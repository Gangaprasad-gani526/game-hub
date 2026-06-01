import useGames from '@/hooks/useGames'
import {SimpleGrid, Text } from '@chakra-ui/react'
import GameCard from './GameCard';
import GameCardSkeleton from '../GameCardSkeleton';
import type { Genres } from '@/hooks/useGenres';

interface Props{
    selectedGenre: Genres | null;
}

const GamesGrid = ({selectedGenre}: Props) => {
    console.log(selectedGenre?.name + " inside gamesgrid")
const {games, error, isLoading} = useGames(selectedGenre);
const skeletons=[1,2,3,4,5,6];

  return (
    <>
    {error && <Text>{error}</Text>}

    <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} gap={3}>
        {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton}/>)}
        {games.map(game => <GameCard key={game.id} game={game}/>)}
    </SimpleGrid>
    </>
  )
}

export default GamesGrid