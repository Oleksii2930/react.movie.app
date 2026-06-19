import "./Header.module.css";

interface Props {
    search: string;
    setSearch: (value: string) => void;
}

const Header = ({ search, setSearch }: Props) => {
    return (
        <header className="header">
            <h1>🎬 Movies App</h1>

            <input
                type="text"
                placeholder="Search movies..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </header>
    );
};

export default Header;