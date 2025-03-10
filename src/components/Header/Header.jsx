import styled from "styled-components";

const StyledHeader = styled.h2`
  color: green;
  border: 1px solid purple;
  width: 100%;
  height: 3rem;
`;

function Header(props) {
  return <StyledHeader>{props.title}</StyledHeader>;
}

export default Header;
