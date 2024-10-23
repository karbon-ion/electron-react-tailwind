import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard.jsx";

function AppRouter() {

    return (
        <HashRouter>
            <Routes>
                <Route path="/" Component={Dashboard} />
            </Routes>
        </HashRouter>
    )
}

export default AppRouter