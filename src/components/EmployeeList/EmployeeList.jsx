import styled from "styled-components";

const StyledEmployeeList = styled.div`
  border: 1px solid yellow;
  width: 98%;
  height: 83%;
`;

function EmployeeList(props) {
  return <StyledEmployeeList></StyledEmployeeList>;
}

export default EmployeeList;
