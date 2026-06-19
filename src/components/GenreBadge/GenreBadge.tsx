import css from "./GenreBadge.module.css";

interface Props {
    name: string;
}

const GenreBadge = ({ name }: Props) => {
    return (
        <span className={css.badge}>
            {name}
        </span>
    );
};

export default GenreBadge;