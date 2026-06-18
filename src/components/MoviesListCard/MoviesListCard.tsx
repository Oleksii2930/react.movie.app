interface Props {
    movie: any;
}

const MoviesListCard = ({ movie }: Props) => {
    return (
        <div>
            <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
            />

            <h3>{movie.title}</h3>

            <p>⭐ {movie.vote_average}</p>
        </div>
    );
};

export default MoviesListCard;