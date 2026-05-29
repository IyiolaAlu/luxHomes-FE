import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ContextHouse from "./Context/ContextHouse.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <ContextHouse>
        <App />
      </ContextHouse>
    </StrictMode>
  </BrowserRouter>,
);
