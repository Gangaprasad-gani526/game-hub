import { Grid, GridItem } from "@chakra-ui/react"
import NavBar from "./components/ui/NavBar"
import GamesGrid from "./components/ui/GamesGrid"


function App() {
  return <Grid templateAreas={`"nav nav" "aside main"`}>
    <GridItem area="nav">
      <NavBar />

    </GridItem>
    <GridItem area="aside" >
      aside

    </GridItem>
    <GridItem area="main" >
      <GamesGrid></GamesGrid>

    </GridItem>

  </Grid>

}

export default App
