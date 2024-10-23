import React from "react";
import {createRoot} from 'react-dom/client'
import App from "./App.jsx";
import './index.css'
// import AppRouter from "./modules/router/AppRouter.jsx";

const root = createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)