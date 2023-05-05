import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ProfileContextProvider } from "./store/profile-context.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProfileContextProvider>
      <App />
    </ProfileContextProvider>
  </React.StrictMode>
);
