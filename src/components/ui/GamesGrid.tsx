import useGames from '@/hooks/useGames'
import { Heading, SimpleGrid, Text } from '@chakra-ui/react'
import GameCard from './GameCard';
import GameCardSkeleton from '../GameCardSkeleton';
import type { Genres } from '@/hooks/useGenres';
import { SearchContext } from '@/context/SearchTextProvider'
import { useContext} from 'react';
import useSearchGames from '@/hooks/useSearchGames';

interface Props {
  selectedGenre: Genres | null;
}

const GamesGrid = ({ selectedGenre }: Props) => {
  console.log(selectedGenre?.name + " inside gamesgrid")
  const { games, error, isLoading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6];
  const { data } = useContext(SearchContext);
  const { gamesSearch, errorSearch, isLoadingSearch } = useSearchGames(data);

  const finalGames = data.length > 0 ? gamesSearch : games;
  const finalErrorSearch = data.length > 0 ? errorSearch : error;
  const finalIsLoading = data.length > 0 ? isLoadingSearch : isLoading;

  return (
    <>
      {finalErrorSearch && <Text>{error}</Text>}
      {(finalGames.length==0) && <Heading>No Results Found with string : {data}</Heading>}

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={3}>
        {finalIsLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton} />)}
        {finalGames.map(game => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
    </>
  )
}

export default GamesGrid