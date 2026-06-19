import css from "./Header.module.css";

interface Props {
    search: string;
    setSearch: (value: string) => void;
}

const Header = ({ search, setSearch }: Props) => {
    return (
        <header className={css.header}>

            <div className={css.logo}>
                🎬 Movies
            </div>

            <div className={css.searchContainer}>
                <input
                    className={css.search}
                    type="text"
                    placeholder="Search movies..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <button className={css.searchBtn}>
                    🔍
                </button>
            </div>

            <div className={css.actions}>
                <button className={css.signUp}>
                    Sign up
                </button>

                <button className={css.login}>
                    Log in
                </button>
            </div>

        </header>
    );
};

export default Header;