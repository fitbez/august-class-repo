import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import EmployeeContextProvider from "./employeeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EmployeeContextProvider>
      <App />
    </EmployeeContextProvider>
  </StrictMode>
);
