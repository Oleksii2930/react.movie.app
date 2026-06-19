interface Props {
    posterPath: string | null;
    title: string;
}

const PosterPreview = ({ posterPath, title }: Props) => {

    if (!posterPath) {
        return <div>No Image</div>;
    }

    return (
        <img
            src={`https://image.tmdb.org/t/p/w300${posterPath}`}
            alt={title}
        />
    );
};

export default PosterPreview;