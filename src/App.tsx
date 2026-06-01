import { Grid, GridItem } from "@chakra-ui/react"
import NavBar from "./components/ui/NavBar"
import GamesGrid from "./components/ui/GamesGrid"
import GenreList from "./components/GenreList"


function App() {
  return <Grid 
  templateAreas={`"nav nav" "aside main"`}
   templateColumns={`base:'1fr', lg: '200px 1fr'`}
  
  >


    <GridItem area="nav">
      <NavBar />

    </GridItem>
    <GridItem area="aside" paddingX={5} >
     <GenreList/>

    </GridItem>
    <GridItem area="main" >
      <GamesGrid></GamesGrid>

    </GridItem>

  </Grid>

}

export default App
