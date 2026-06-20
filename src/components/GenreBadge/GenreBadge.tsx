import  "./GenreBadge.css";

interface Props {
    name: string;
}

const GenreBadge = ({ name }: Props) => {
    return (
        <span className="badge">
            {name}
        </span>
    );
};

export default GenreBadge;