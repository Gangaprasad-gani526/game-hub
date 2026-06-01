import { Grid, GridItem } from "@chakra-ui/react"
import NavBar from "./components/ui/NavBar"
import GamesGrid from "./components/ui/GamesGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { type Genres } from '@/hooks/useGenres'


function App() {
const [selectedGenre, setSelectedGenre]=useState<Genres | null>(null)
const [searchText, setSearchText]=useState<string>('')

  return <Grid 
  templateAreas={`"nav nav" "aside main"`}
   templateColumns={`base:'1fr', lg: '200px 1fr'`}
  
  >

    <GridItem area="nav">
      <NavBar onSearch={(text)=> {setSearchText(text)
        console.log(text+" from search bar app.tsx")
      }} />

    </GridItem>
    <GridItem area="aside" paddingX={5} >
     <GenreList selectedGenre={selectedGenre} onSelectedGenre={(genre)=>{setSelectedGenre(genre)
      console.log(selectedGenre?.id + "genere inside main")
     }}/>

    </GridItem>
    <GridItem area="main" >
      <GamesGrid selectedGenre={selectedGenre}></GamesGrid>

    </GridItem>

  </Grid>

}

export default App
