interface Props {
    name: string;
}

const GenreBadge = ({ name }: Props) => {
    return (
        <span>
            {name}
        </span>
    );
};

export default GenreBadge;