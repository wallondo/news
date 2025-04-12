import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import Rotas from "./rotas";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <Rotas/>
    </StrictMode>
)

