import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { IMovieDetails } from "../../models/IMovieDetails";
import { movieService } from "../../api";

import StarsRating from "../../components/StarsRating";
import "./MovieDetailsPage.css";

const MovieDetailsPage = () => {

    const { id } = useParams();
    const navigate = useNavigate();

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
        <div className="movie-details">

            <button
                className="back-button"
                onClick={() => navigate(-1)}
            >
                ← Back
            </button>

            <div className="movie-header">

                <img
                    className="movie-poster"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                />

                <div className="movie-info">

                    <h1>{movie.title}</h1>

                    <div className="movie-rating">
                        <StarsRating rating={movie.vote_average} />
                        <span>{movie.vote_average.toFixed(1)}/10</span>
                    </div>

                    <div className="movie-genres">
                        {movie.genres.map(genre => (
                            <span
                                key={genre.id}
                                className="genre-pill"
                            >
                                {genre.name}
                            </span>
                        ))}
                    </div>

                    <p className="movie-overview">
                        {movie.overview}
                    </p>

                </div>

            </div>

            <div className="movie-extra">

                <h2>Additional Information</h2>

                <div className="info-grid">

                    <div className="info-card">
                        <span>Release Date</span>
                        <strong>{movie.release_date}</strong>
                    </div>

                    <div className="info-card">
                        <span>Runtime</span>
                        <strong>{movie.runtime} min</strong>
                    </div>

                    <div className="info-card">
                        <span>Language</span>
                        <strong>
                            {movie.original_language.toUpperCase()}
                        </strong>
                    </div>

                    <div className="info-card">
                        <span>Popularity</span>
                        <strong>
                            {Math.round(movie.popularity)}
                        </strong>
                    </div>

                    <div className="info-card">
                        <span>Votes</span>
                        <strong>
                            {movie.vote_count}
                        </strong>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default MovieDetailsPage;