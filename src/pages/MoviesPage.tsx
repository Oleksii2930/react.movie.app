import { useEffect, useState } from "react";
import { movieService } from "../api/movieService";
import MoviesList from "../components/MoviesList";

const MoviesPage = () => {
    const [movies, setMovies] = useState<any[]>([]);
    const [genres, setGenres] = useState<any[]>([]);

    useEffect(() => {
        const loadMovies = async () => {
            const res = await movieService.getMovies();
            setMovies(res.data.results);
        };

        loadMovies();
    }, []);

    useEffect(() => {
        movieService
            .getGenres()
            .then(res => {
                setGenres(res.data.genres);
            })
            .catch(console.error);
    }, []);

    const getMoviesByGenre = async (genreId: number) => {
        const res = await movieService.getMoviesByGenre(genreId);

        setMovies(res.data.results);
    };

    return (
        <div>
            <h2>Genres</h2>

            <div>
                {genres.map(genre => (
                    <button
                        key={genre.id}
                        onClick={() => getMoviesByGenre(genre.id)}
                    >
                        {genre.name}
                    </button>
                ))}
            </div>

            <h2>Movies</h2>

           <MoviesList movies={movies} />
        </div>
    );
};

export default MoviesPage;