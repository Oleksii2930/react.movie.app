import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

import AppRouter from "./routers/AppRoutes";

function App() {

    const [search, setSearch] = useState("");

    return (
        <BrowserRouter>
            <AppRouter
                search={search}
                setSearch={setSearch}
            />
        </BrowserRouter>
    );
}

export default App;