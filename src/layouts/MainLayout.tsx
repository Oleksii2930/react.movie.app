import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

interface Props {
    search: string;
    setSearch: (value: string) => void;
}

const Layout = ({ search, setSearch }: Props) => {
    return (
        <>
            <Header
                search={search}
                setSearch={setSearch}
            />


            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;