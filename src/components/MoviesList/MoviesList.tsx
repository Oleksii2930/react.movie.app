import MoviesListCard from "../MoviesListCard/MoviesListCard";
import "./MoviesList.css";
import {IMovie} from "../../models/IMovie";
import {IGenre} from "../../models/IGenre";

interface Props {
    movies: IMovie[];
    genres: IGenre[];
}

const MoviesList = ({ movies, genres }: Props) => {
    return (
        <div className="movies-grid">
            {movies.map(movie => (
                <MoviesListCard
                    key={movie.id}
                    movie={movie}
                    genres={genres}
                />
            ))}
        </div>
    );
};

export default MoviesList;