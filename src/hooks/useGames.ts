import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";

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

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);

        apiClient.get<FetchGamesResponse>('/games', { signal: controller.signal })
            .then((res) => {
                setGames(res.data.results);
                setLoading(false);
            })
            .catch((err) => {
                // Ignore errors triggered by the AbortController cancellation
                if (err.name === 'CanceledError') return; 
                
                setError(err.message || "An error occurred");
                setLoading(false);
            });

        return () => controller.abort();
    }, []); // Empty dependency array keeps it running only once on mount

    return { games, error, isLoading };
};

export default useGames;
