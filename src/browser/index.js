import React from 'react';
import ReactDOM from "react-dom";
import App from "../shared/App";
import {StaticRouter} from "react-router-dom";

ReactDOM.hydrate(
        <StaticRouter location={window.location}>
            <App/>
        </StaticRouter>,
    document.getElementById("root"));