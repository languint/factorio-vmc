import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider";
import { invoke } from "@tauri-apps/api/core";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark">
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

window.addEventListener("keydown", (e) => {
  if (e.key == "F11") {
    e.preventDefault();
    invoke("toggle_fullscreen");
  }
});
