import React from "react";
import { createRoot } from "react-dom/client";
import "../tailwind.css";
import {
  createHashRouter as createRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Popup from "./Pages/Popup";
console.log("Popup App.js loaded");

// ? ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----

// 1️⃣ Create the Root component
function Root() {
  // 2️⃣ Add the "Route" components to the "Routes" component
  return (
    <Routes>
      <Route path="/" element={<Popup />} />
    </Routes>
  );
}
// 3️⃣ Router singleton created
const router = createRouter([{ path: "*", element: <Root /> }]);
// 4️⃣ RouterProvider added
function App() {
  return <RouterProvider router={router} />;
}
// get the popup-root element
const rootElement = document.getElementById("popup-root");
// Initialize the root and render the component
const root = createRoot(rootElement);
root.render(<App />);
