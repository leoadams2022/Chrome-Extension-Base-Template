import React from "react";
import "../tailwind.css";
import { createRoot } from "react-dom/client";
import Options from "./Options";
console.log("Options is running");
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<Options />);
