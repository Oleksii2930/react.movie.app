import { IGenre } from "../../models";

interface Props {
    genres: IGenre[];
    activeGenre: number | null;
    onSelectGenre: (genreId: number) => void;
}

const GenresList = ({
                        genres,
                        activeGenre,
                        onSelectGenre,
                    }: Props) => {
    return (
        <div className="genres-container">
            {genres.map((genre) => (
                <button
                    key={genre.id}
                    className={
                        activeGenre === genre.id
                            ? "genre-btn active"
                            : "genre-btn"
                    }
                    onClick={() => onSelectGenre(genre.id)}
                >
                    {genre.name}
                </button>
            ))}
        </div>
    );
};

export default GenresList;