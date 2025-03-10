import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import EmployeeList from "../EmployeeList/EmployeeList";
import styled from "styled-components";

const StyleHomePage = styled.section`
  max-width: 400px;
  height: 700px;
  border: 1px solid green;
`;

function HomePage(props) {
  console.log("props", props);
  return <StyleHomePage></StyleHomePage>;
}

export default HomePage;
