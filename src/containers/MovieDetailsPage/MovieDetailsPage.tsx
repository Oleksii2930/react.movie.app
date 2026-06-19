import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {IMovieDetails} from "../../models/IMovieDetails";
import {movieService} from "../../api";


const MovieDetailsPage = () => {

    const { id } = useParams();

    const [movie, setMovie] = useState<IMovieDetails | null>(null);

    useEffect(() => {

        if (!id) return;

        const loadMovie = async () => {
            const res = await movieService.getMovieById(Number(id));

            setMovie(res.data);
        };

        loadMovie();

    }, [id]);

    if (!movie) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <h1>{movie.title}</h1>

            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
            />

            <p>⭐ {movie.vote_average}</p>

            <p>{movie.release_date}</p>

            <p>{movie.runtime} min</p>

            <p>{movie.overview}</p>
        </div>
    );
};

export default MovieDetailsPage;