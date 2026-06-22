import { useEffect, useState } from "react";

import Pagination from "../../components/Pagination/Pagination";
import Loader from "../../components/Loader/Loader";
import GenresList from "../../components/GenresList/GenresList";

import { useAppDispatch } from "../../redux/hooks/useAppDispatch";
import { useAppSelector } from "../../redux/hooks/useAppSelector";

import { setMovies } from "../../redux/slices/movieSlice";
import { setGenres } from "../../redux/slices/genreSlice";
import {movieService} from "../../api/movieService";
import MoviesList from "../../components/MoviesList/MoviesList";

interface Props {
    search: string;
}

const MoviesPage = ({ search }: Props) => {

    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [activeGenre, setActiveGenre] = useState<number | null>(null);

    const dispatch = useAppDispatch();

    const movies = useAppSelector(
        state => state.movieStoreSlice.movies
    );

    const genres = useAppSelector(
        state => state.genreStoreSlice.genres
    );

    useEffect(() => {
        const loadMovies = async () => {
            try {
                setLoading(true);

                const res = await movieService.getMovies(page);

                dispatch(setMovies(res.data.results));
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };

        loadMovies();
    }, [page, dispatch]);

    useEffect(() => {
        const searchMovie = async () => {
            try {
                setLoading(true);

                if (!search.trim()) {
                    const res = await movieService.getMovies(page);

                    dispatch(setMovies(res.data.results));
                    return;
                }

                const res = await movieService.searchMovies(search);

                dispatch(setMovies(res.data.results));
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };

        searchMovie();
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
        try {
            setLoading(true);

            setActiveGenre(genreId);

            const res = await movieService.getMoviesByGenre(
                genreId
            );

            dispatch(setMovies(res.data.results));
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>

            <h2>Genres</h2>

            <GenresList
                genres={genres}
                activeGenre={activeGenre}
                onSelectGenre={getMoviesByGenre}
            />



            <h2>Movies</h2>

            {loading ? (
                <Loader />
            ) : (
                <MoviesList
                    movies={movies}
                    genres={genres}
                />
            )}
            <Pagination
                page={page}
                setPage={setPage}
            />
        </div>
    );
};

export default MoviesPage;