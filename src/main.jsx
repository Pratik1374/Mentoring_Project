import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth.jsx";
import { FileProvider } from "./context/FileContext.jsx";
import { MentorProvider } from "./context/MentorContext.jsx";
import { BatchProvider } from "./context/BatchContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <FileProvider>
      <MentorProvider>
        <BatchProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </BatchProvider>
      </MentorProvider>
    </FileProvider>
  </AuthProvider>
);
