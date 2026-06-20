import  "./Header.css";

interface Props {
    search: string;
    setSearch: (value: string) => void;
}

const Header = ({ search, setSearch }: Props) => {
    return (
        <header className="header">

            <h1 className="logo">
                🎬 Movies App
            </h1>

            <div className="search-wrapper">



                <input
                    type="text"
                    placeholder="Search movies..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-input"
                />

            </div>

        </header>
    );
};

export default Header;