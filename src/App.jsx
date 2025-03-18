import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import EmployeePage from "./components/EmployeePage/EmployeePage";
import styled from "styled-components";
import NavBar from "./components/NavBar/NavBar";
import { employeeData } from "./data";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import Login from "./components/Login/Login";
import AddEmployee from "./components/AddEmployee/AddEmployee";

const additionalEmployee = [
  {
    name: "Donell Omar",
    profilePicture:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400",
    occupation: "FE Architect",
    callOffice: "123456789",
    callMobile: "204208029",
    email: "matteo@email.com",
  },
  {
    name: "Drake Xavier",
    profilePicture:
      "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400",
    occupation: "UI/UX",
    callOffice: "123456789",
    callMobile: "204208029",
    email: "daniel@email.com",
  },
  {
    name: "Adrew Piacquadio",
    profilePicture:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
    occupation: "Devops Engineer",
    callOffice: "12345678",
    callMobile: "204208029",
    email: "andrea@email.com",
  },
];

const StyledApp = styled.section`
  display: flex;
`;

function App() {
  const data = employeeData;
  const [employeeList, setEmployeeList] = useState(data); //react useState hook
  const [count, setCount] = useState(10); //1 + 1 = 2

  console.log("state data", employeeList);

  const handleViewMore = () => {
    setEmployeeList([...data, ...additionalEmployee]);
  };

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="add-employee" element={<AddEmployee />} />
          <Route
            path="employee-list"
            element={<EmployeePage employeeData={employeeData} />}
          />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
