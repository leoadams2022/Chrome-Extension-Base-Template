import React from "react";
import { createRoot } from "react-dom/client";
import "../tailwind.css";
import {
  createHashRouter as createRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom"; // Lazy import

import Content from "./Pages/Content";
import { imgSrc } from "../helpers/helpers";
console.log("Content App.js loaded");

// ? ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----

// 1️⃣ Create the Root component
function Root() {
  // 2️⃣ Add the "Route" components to the "Routes" component
  return (
    <Routes>
      <Route
        path="/"
        element={<Content minimizeExtension={minimizeExtension} />}
      />
    </Routes>
  );
}
// 3️⃣ Router singleton created
const router = createRouter([{ path: "*", element: <Root /> }]);
// 4️⃣ RouterProvider added
function App() {
  return <RouterProvider router={router} />;
}
// Create a root div to mount the component into the DOM
const rootElement = document.createElement("div");
rootElement.id = "EXTENSION_ROOT";
// Add styles to the root element to position it
rootElement.style.cssText = `
  position: fixed;
  top: 110px;
  right: 50px;
  z-index: 100;
  width: 450px;
  height: 230px;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(100vh);
  `;
document.body.appendChild(rootElement);
// Initialize the root and render the component
const root = createRoot(rootElement);
root.render(<App />);

// ? create a restore button ----------------------------------------------------------------------------
const restoreBtn = document.createElement("button");
restoreBtn.addEventListener("click", restoreExtension);
restoreBtn.id = "restoreBtn";
restoreBtn.style.cssText = `
  position: fixed;
  bottom: 21px;
  right: 60px;
  border-radius: 8px;
  display: block;
  width: 40px;
  height: 40px;
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.16s ease-out;
  background: rgb(255, 255, 255);
  border: 0px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  padding: 4px; `;
const logoImg = document.createElement("img");
logoImg.src = imgSrc("images/icon-512.png");
logoImg.style.cssText = `
  width: 100%;`;
restoreBtn.appendChild(logoImg);
document.body.appendChild(restoreBtn);

// ? minimizeExtension and restoreExtension ----------------------------------------------------------------------------
function minimizeExtension() {
  // Minimize the rootElement
  rootElement.classList.add("minimizing");
  restoreBtn.style.display = "block"; // Show restore button
}
function restoreExtension() {
  // Restore the rootElement
  rootElement.classList.remove("minimizing");
  rootElement.classList.add("restoring");
  restoreBtn.style.display = "none"; // Hide restore button
  setTimeout(() => {
    rootElement.style.opacity = 1;
    rootElement.style.transform = "";
    rootElement.classList.remove("restoring");
  }, 400);
}
