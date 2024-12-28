import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Gunakan StrictMode untuk meningkatkan kualitas pengembangan (hanya di development)
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
