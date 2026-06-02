import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";
import type { AxiosRequestConfig } from "axios";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const useSearchGames = (searchText: string | '') => {
    const [gamesSearch, setGamesSearch] = useState<Game[]>([]);
    const [errorSearch, setErrorSearch] = useState('');
    const [isLoadingSearch, setLoadingSearch] = useState(false);


    useEffect(() => {
        const controller = new AbortController();
        setLoadingSearch(true);

   const config: AxiosRequestConfig = {
    params: {
        search: searchText
    }
};


        apiClient.get<FetchGamesResponse>('/games', {signal: controller.signal, ...config})
            .then((res) => {
                setGamesSearch(res.data.results);
                setLoadingSearch(false);
                console.log(gamesSearch + 'games api results: ' + res.data.results)
            })
            .catch((err) => {
                // Ignore errors triggered by the AbortController cancellation
                if (err.name === 'CanceledError') return;

                setErrorSearch(err.message || "An error occurred");
                setLoadingSearch(false);
            });

        return () => controller.abort();
    }, [searchText]); // Empty dependency array keeps it running only once on mount

    return { gamesSearch, errorSearch, isLoadingSearch };
};

export default useSearchGames;
