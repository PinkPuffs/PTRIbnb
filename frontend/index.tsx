import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import Login from "./components/Login";
import Hero from "./components/Hero";
import './styles.css';

createRoot(document.querySelector("#app")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//ask group about what happens when you use prettier here (turns into one line)
// You made it prettier?
