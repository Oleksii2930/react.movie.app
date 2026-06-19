import MoviesListCard from "../MoviesListCard/MoviesListCard";
import {IGenre, IMovie} from "../../models";

interface Props {
    movies: IMovie[];
    genres: IGenre[];
}

const MoviesList = ({ movies, genres }: Props) => {
    return (
        <div>
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