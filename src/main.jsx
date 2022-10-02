import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserProvider } from "./reducer/Store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <div>
      <App />
    </div>
  </UserProvider>
);
