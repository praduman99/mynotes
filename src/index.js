import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
// Call make Server
makeServer();
const container =document.getElementById("root")
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
