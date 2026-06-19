import StarsRating from "../StarsRating";
import GenreBadge from "../GenreBadge";

interface Props {
    title: string;
    rating: number;
    genres: string[];
}

const MovieInfo = ({ title, rating, genres }: Props) => {
    return (
        <div>
            <h3>{title}</h3>

            <StarsRating rating={rating} />

            <div>
                {genres.map(genre => (
                    <GenreBadge
                        key={genre}
                        name={genre}
                    />
                ))}
            </div>
        </div>
    );
};

export default MovieInfo;