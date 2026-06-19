interface Props {
    rating: number;
}

const StarsRating = ({ rating }: Props) => {
    return (
        <div>
            ⭐ {rating.toFixed(1)}
        </div>
    );
};

export default StarsRating;