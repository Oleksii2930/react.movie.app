import PosterPreview from "../PosterPreview";
import { IGenre, IMovie } from "../../models";
import MovieInfo from "../MovieInfo/MovieInfo";
import UserInfo from "../UserInfo/UserInfo";
import { Link } from "react-router-dom";

interface Props {
    movie: IMovie;
    genres: IGenre[];
}

const MoviesListCard = ({ movie, genres }: Props) => {

    const movieGenres: string[] = movie.genre_ids
        .map(id => genres.find(genre => genre.id === id)?.name)
        .filter((name): name is string => Boolean(name));

    return (
        <Link to={`/movie/${movie.id}`}
              style={{
                  textDecoration: "none",
                  color: "inherit"
              }}>
        <div>
            <PosterPreview
                posterPath={movie.poster_path}
                title={movie.title}
            />


            <MovieInfo
                title={movie.title}
                rating={movie.vote_average}
                genres={movieGenres}
            />
            <UserInfo username="Movie Fan" />
        </div>
        </Link>
    );
};

export default MoviesListCard;