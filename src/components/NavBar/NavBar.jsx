import { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #2196f3;
  padding: 20px 15px;
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
        <Link to="/">HOME</Link>
        <Link to="add-employee">ADD EMPLOYEES</Link>
        <Link to="employee-list">EMPLOYEE LIST</Link>
        <Link to="countries">COUNTRIES</Link>
        <Link to="login">LOG OUT</Link>
      </StyledMenu>
    </StyledNav>
  );
}

export default NavBar;
