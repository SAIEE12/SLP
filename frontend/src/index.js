import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // Importing the App component

// Target the root DOM element
const rootElement = document.getElementById("root");

// Create a root and render the React app
const root = createRoot(rootElement);
root.render(<App />);
