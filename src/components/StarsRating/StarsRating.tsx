import css from "./StarsRating.module.css";

interface Props {
    rating: number;
}

const StarsRating = ({ rating }: Props) => {

    const percentage = (rating / 10) * 100;

    return (
        <div className={css.ratingWrapper}>
            <div className={css.starsEmpty}>
                ★★★★★
            </div>

            <div
                className={css.starsFilled}
                style={{ width: `${percentage}%` }}
            >
                ★★★★★
            </div>
        </div>
    );
};

export default StarsRating;