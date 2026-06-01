import useGenres, { type Genres } from '@/hooks/useGenres'
import { Button, HStack, Image, ListItem, ListRoot, Spinner, Text } from '@chakra-ui/react'
import getCropImageURL from '@/services/image-url'

interface Props{
    onSelectedGenre: (genre: Genres) => void;
    selectedGenre : Genres | null

}

const GenreList = ({selectedGenre, onSelectedGenre}: Props ) => {
    const { genres, isLoading } = useGenres()
    if(isLoading) return <Spinner/>
    return (
        <ListRoot listStyleType="none">
            {genres.map(genre => <ListItem key={genre.id} paddingY={'5px'}>
                <HStack>
                     <Image boxSize={'32px'} borderRadius={8} src = {getCropImageURL(genre.image_background)}/>
                    <Button fontWeight={genre.id=== selectedGenre?.id? 'bold' : 'normal'} onClick={()=>{onSelectedGenre(genre)}} fontSize='lg' variant='link'>{genre.name}</Button>
                </HStack>
            </ListItem>)}
        </ListRoot>
    )
}

export default GenreList