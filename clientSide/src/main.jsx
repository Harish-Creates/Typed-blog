import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        themes={["light", "dark", "customTheme"]}
      >
        <App />
      </ThemeProvider>
    </NextUIProvider>
  </React.StrictMode>
);