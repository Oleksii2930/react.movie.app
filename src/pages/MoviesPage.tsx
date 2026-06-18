import { useEffect, useState } from "react";
import { movieService } from "../api/movieService";
import MoviesList from "../components/MoviesList";

const MoviesPage = () => {

    const [movies, setMovies] = useState<any[]>([]);

    useEffect(() => {
        const loadMovies = async () => {
            const res = await movieService.getMovies();
            setMovies(res.data.results);
        };

        loadMovies();
    }, []);

    return (
        <div>
            <h2>Movies</h2>

            <MoviesList movies={movies} />
        </div>
    );
};

export default MoviesPage;