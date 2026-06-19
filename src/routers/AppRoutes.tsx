import { Routes, Route } from "react-router-dom";

import MoviesPage from "../pages/MoviesPage";
import MovieDetailsPage from "../containers/MovieDetailsPage/MovieDetailsPage";
import Layout from "../layouts/MainLayout";

interface Props {
    search: string;
    setSearch: (value: string) => void;
}

const AppRouter = ({ search, setSearch }: Props) => {
    return (
        <Routes>

            <Route
                element={
                    <Layout
                        search={search}
                        setSearch={setSearch}
                    />
                }
            >

                <Route
                    path="/"
                    element={
                        <MoviesPage
                            search={search}
                        />
                    }
                />

                <Route
                    path="/movie/:id"
                    element={<MovieDetailsPage />}
                />

            </Route>

        </Routes>
    );
};

export default AppRouter;