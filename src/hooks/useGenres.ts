import { useEffect, useState } from "react";
import type { Game } from "./useGames";
import apiClient from "@/services/api-client";

interface Genres{
    id:number
    name: string

}

interface FetchGenresResponse{
    count: number;
    results:Genres[]

}

const useGenres = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [genres, setGenres] = useState<Genres[]>([]);
        const [error, setError] = useState('');
        const [isLoading, setLoading] = useState(false);
    
        useEffect(() => {
            const controller = new AbortController();
            setLoading(true);
    
            apiClient.get<FetchGenresResponse>('/genres', { signal: controller.signal })
                .then((res) => {
                    setGenres(res.data.results);
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
    
        return { genres, error, isLoading };
}

export default useGenres;