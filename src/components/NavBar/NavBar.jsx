import { Fragment } from "react";
import styled from "styled-components";

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #2196f3;
  padding: 20px 15px;
  margin-bottom: 4rem;
  color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
`;
const StyledMenu = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  align-items: center;
`;

function NavBar() {
  return (
    //React Fragment <></> (React.Fragment)
    // using a wrapper div
    <StyledNav>
      <h2>Employees</h2>
      <StyledMenu>
        <li>HOME</li>
        <li>ADD EMPLOYEES</li>
        <li>EMPLOYEE LIST</li>
        <li>LOG OUT</li>
      </StyledMenu>
    </StyledNav>
  );
}

export default NavBar;
