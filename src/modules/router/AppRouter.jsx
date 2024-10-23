import React from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../components/Login.jsx";
import Dashboard from "../components/Dashboard.jsx";
import SignUp from "../components/SignUp.jsx";

function AppRouter() {

    const user = localStorage.getItem('user')

    return (
        <HashRouter>
            <Routes>
                {/* <Route path='/' Component={user ? Dashboard:Login}/> */}
                {user ?
                <Route path="/" Component={Dashboard} />:
                <>
                <Route path="/" Component={Login} />
                <Route path="/signup" Component={SignUp}/>
                </>
                }
            </Routes>
        </HashRouter>
    )
}

export default AppRouter