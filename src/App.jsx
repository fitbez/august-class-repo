import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import EmployeePage from "./components/EmployeePage/EmployeePage";
import styled from "styled-components";
import NavBar from "./components/NavBar/NavBar";
import { employeeData } from "./data";

const StyledApp = styled.section`
  display: flex;
`;

function App() {
  const data = employeeData;
  return (
    <>
      <NavBar />
      <StyledApp>
        <HomePage employeeData={data} />
        <EmployeePage employeeData={data} />
      </StyledApp>
    </>
  );
}

export default App;
