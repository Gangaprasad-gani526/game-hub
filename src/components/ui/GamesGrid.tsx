import { useStatusStyles, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import apiClient from '@/services/api-client';


interface Game{
    id : number;
    name:string; 
}

interface FetchGamesResponse{
    count : number;
    results: Game[];
}

const GamesGrid = () => {

const [games, setGames] = useState<Game[]>([]);
const [error, setError] = useState('');

useEffect (()=>{
    apiClient.get<FetchGamesResponse>('/games')
    .then(res => setGames(res.data.results))
    .catch((err)=>{
        console.log(error+ "Error Message");
        setError(err);

    })
})

  return (
    <>
    {error && <Text>{error}</Text>}

    <ul>
        {games.map(game => <li key={game.id}>{game.name}</li>)}
    </ul>
    </>
  )
}

export default GamesGrid