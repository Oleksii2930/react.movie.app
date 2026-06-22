import "./Pagination.css";

interface Props {
    page: number;
    setPage: (value: number | ((prev: number) => number)) => void;
}

const Pagination = ({ page, setPage }: Props) => {
    return (
        <div className="pagination">

            <button
                className="pagination-btn"
                disabled={page === 1}
                onClick={() => setPage(prev => prev - 1)}
            >
                ←
            </button>

            <span className="page-number">
                {page}
            </span>

            <button
                className="pagination-btn"
                onClick={() => setPage(prev => prev + 1)}
            >
                →
            </button>

        </div>
    );
};

export default Pagination;