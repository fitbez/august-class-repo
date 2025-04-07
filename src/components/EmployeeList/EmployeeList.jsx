import styled from "styled-components";
import EmployeePage from "../EmployeePage/EmployeePage";
import EmployeeDetail from "../EmployeeDetail/EmployeeDetail";
import { useState } from "react";

const StyledEmployeeList = styled.div`
  border: 1px solid yellow;
  width: 98%;
  height: 83%;
  display: flex;
  gap: 2rem;
`;

function EmployeeList(props) {
  const [employeeId, setEmployeeId] = useState("");

  const handleEmployeeId = (id) => {
    setEmployeeId(id);
  };

  return (
    <StyledEmployeeList>
      <EmployeePage handleEmployeeId={handleEmployeeId} />
      <EmployeeDetail employeeId={employeeId} />
    </StyledEmployeeList>
  );
}

export default EmployeeList;
