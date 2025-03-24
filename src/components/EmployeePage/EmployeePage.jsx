import styled from "styled-components";
import { useContext } from "react";
import { EmployeeContext } from "../../employeeContext";

const StyledEmployeePage = styled.section`
  max-width: 400px;
  margin-left: 4rem;
  margin-top: 4rem;
`;

const StyledEmployeeCard = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  margin-bottom: 1rem;
  min-width: 400px;
  padding: 0.75rem;
  gap: 1rem;
  cursor: pointer;
`;

const StyledImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;

const StyledParagraph = styled.p`
  font-size: 0.8rem;
`;

function EmployeePage() {
  const { employeeList } = useContext(EmployeeContext);

  return (
    <StyledEmployeePage>
      {employeeList.map((employee) => {
        return (
          <StyledEmployeeCard key={employee.id}>
            <StyledImage src={employee.profilePicture} alt="" />
            <div>
              <h4>{employee.name}</h4>
              <StyledParagraph>{employee.occupation}</StyledParagraph>
            </div>
          </StyledEmployeeCard>
        );
      })}
    </StyledEmployeePage>
  );
}

export default EmployeePage;
