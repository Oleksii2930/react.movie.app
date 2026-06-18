import MoviesListCard from "../MoviesListCard/MoviesListCard";

interface Props {
    movies: any[];
}

const MoviesList = ({ movies }: Props) => {
    return (
        <div>
            {movies.map(movie => (
                <MoviesListCard
                    key={movie.id}
                    movie={movie}
                />
            ))}
        </div>
    );
};

export default MoviesList;