import useGenres from '@/hooks/useGenres'
import { HStack, Image, ListItem, ListRoot, Spinner, Text } from '@chakra-ui/react'
import getCropImageURL from '@/services/image-url'

const GenreList = () => {
    const { genres, isLoading } = useGenres()
    if(isLoading) return <Spinner/>
    return (
        <ListRoot listStyleType="none">
            {genres.map(genre => <ListItem key={genre.id} paddingY={'5px'}>
                <HStack>
                     <Image boxSize={'32px'} borderRadius={8} src = {getCropImageURL(genre.image_background)}/>
                    <Text fontSize='lg'>{genre.name}</Text>
                </HStack>
            </ListItem>)}
        </ListRoot>
    )
}

export default GenreList