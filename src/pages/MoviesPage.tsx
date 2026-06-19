import { useEffect, useState } from "react";
import { movieService } from "../api/movieService";
import MoviesList from "../components/MoviesList";
import Pagination from "../components/Pagination/Pagination";

import { useAppDispatch } from "../redux/hooks/useAppDispatch";
import { useAppSelector } from "../redux/hooks/useAppSelector";

import { setMovies } from "../redux/slices/movieSlice";
import { setGenres } from "../redux/slices/genreSlice";

interface Props {
    search: string;
}

const MoviesPage = ({ search }: Props) => {
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();

    const movies = useAppSelector(
        state => state.movieStoreSlice.movies
    );

    const genres = useAppSelector(
        state => state.genreStoreSlice.genres
    );

    const [page, setPage] = useState(1);

    useEffect(() => {
        const loadMovies = async () => {
            const res = await movieService.getMovies(page);

            dispatch(setMovies(res.data.results));
        };

        loadMovies();
    }, [page, dispatch]);

    useEffect(() => {

        if (!search.trim()) {
            movieService
                .getMovies(page)
                .then(res => dispatch(setMovies(res.data.results)));

            return;
        }

        movieService
            .searchMovies(search)
            .then(res => {
                dispatch(setMovies(res.data.results));
            })
            .catch(console.error);

    }, [search, page, dispatch]);

    useEffect(() => {
        movieService
            .getGenres()
            .then(res => {
                dispatch(setGenres(res.data.genres));
            })
            .catch(console.error);
    }, [dispatch]);

    const getMoviesByGenre = async (genreId: number) => {
        const res = await movieService.getMoviesByGenre(genreId);

        dispatch(setMovies(res.data.results));
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

            <Pagination
                page={page}
                setPage={setPage}
            />

            <h2>Movies</h2>

            <MoviesList
                movies={movies}
                genres={genres}
            />
        </div>
    );
};

export default MoviesPage;