import { Fragment } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

function NavBar() {
  const navigate = useNavigate();

  const handleLogo = () => {
    navigate("/");
  };
  return (
    //React Fragment <></> (React.Fragment)
    // using a wrapper div
    <StyledNav>
      <h2 onClick={handleLogo} style={{ cursor: "pointer" }}>
        Employees
      </h2>
      <StyledMenu>
        <StyledLink to="/">HOME</StyledLink>
        <StyledLink to="add-employee">ADD EMPLOYEES</StyledLink>
        <StyledLink to="employee-list">EMPLOYEE LIST</StyledLink>
        <StyledLink to="countries">COUNTRIES</StyledLink>
        <StyledLink to="login">LOG OUT</StyledLink>
      </StyledMenu>
    </StyledNav>
  );
}

export default NavBar;
