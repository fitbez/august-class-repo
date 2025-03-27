import HomePage from "./components/HomePage/HomePage";
import EmployeePage from "./components/EmployeePage/EmployeePage";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import AddEmployee from "./components/AddEmployee/AddEmployee";
import Countries from "./components/Countries/Countries";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="add-employee" element={<AddEmployee />} />
          <Route path="employee-list" element={<EmployeePage />} />
          <Route path="login" element={<Login />} />
          <Route path="countries" element={<Countries />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
