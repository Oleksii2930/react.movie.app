interface Props {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({ page, setPage }: Props) => {
    return (
        <div>
            <button
                disabled={page === 1}
                onClick={() => setPage(prev => prev - 1)}
            >
                Previous
            </button>

            <span> Page {page} </span>

            <button
                onClick={() => setPage(prev => prev + 1)}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;