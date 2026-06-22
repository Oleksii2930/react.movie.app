import "./StarsRating.css";

interface Props {
    rating: number;
}

const StarsRating = ({ rating }: Props) => {

    const percentage = (rating / 10) * 100;

    return (
        <div className="ratingWrapper">
            <div className="starsEmpty">
                ★★★★★
            </div>

            <div
                className="starsFilled"
                style={{ width: `${percentage}%` }}
            >
                ★★★★★
            </div>
        </div>
    );
};

export default StarsRating;