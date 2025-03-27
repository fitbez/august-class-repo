import styled from "styled-components";
import { StyledButton } from "../HomePage/HomePage";
import { useState, useContext } from "react";
import { EmployeeContext } from "../../employeeContext";

const StyledFormContainer = styled.div`
  margin: 2rem auto;
  max-width: 300px;
`;

const StyledLabel = styled.label`
  font-weight: 600;
  flex: 1;
`;

const StyledInput = styled.input`
  padding: 5px;
  border: none;
  border: 1px solid #333;
  border-radius: 4px;
`;

const StyledInputWrapper = styled.div`
  display: flex;
  margin-bottom: 4px;
`;

function AddEmployee() {
  const { setEmployeeList, employeeList } = useContext(EmployeeContext);

  const [formData, setFormData] = useState({
    name: "",
    profilePicture: "",
    occupation: "",
    callMobile: "",
    callOffice: "",
    email: "",
  });

  const [errors, setErrors] = useState("");

  const validate = (name, value) => {
    switch (name) {
      case "name":
        setErrors({
          ...errors,
          name: value.length < 3 ? "Name is too short" : "",
        });
        break;
      case "occupation":
        setErrors({
          ...errors,
          occupation: value.length < 3 ? "Occupation is too short" : "",
        });
        break;
      case "callMobile":
        setErrors({
          ...errors,
          callMobile: value.length < 10 ? "Invalid phone number" : "",
        });
        break;
      case "callOffice":
        setErrors({
          ...errors,
          callMobile: value.length < 10 ? "Invalid office number" : "",
        });
        break;
      case "email":
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setErrors({
          ...errors,
          email: !regex.test(value) ? "Invalid email" : "",
        });
        break;
      default:
        break;
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    validate(event.target.name, event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmployeeList([...employeeList, formData]);
    setFormData({
      name: "",
      profilePicture: "",
      occupation: "",
      callMobile: "",
      callOffice: "",
      email: "",
    });
  };

  console.log("employee list", employeeList);

  return (
    <>
      <h3>Add Employee</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim totam,
        facere veritatis at tenetur consectetur quas officia inventore sapiente
        perferendis.
      </p>
      <StyledFormContainer>
        <form onSubmit={handleSubmit}>
          <StyledInputWrapper>
            <StyledLabel htmlFor="name">Name: </StyledLabel>
            <StyledInput
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
          </StyledInputWrapper>
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
          <StyledInputWrapper>
            <StyledLabel htmlFor="profilePicture">
              Profile Picture:{" "}
            </StyledLabel>
            <StyledInput
              type="text"
              name="profilePicture"
              id="profilePicture"
              value={formData.profilePicture}
              onChange={handleChange}
            />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <StyledLabel htmlFor="occupation">Occupation: </StyledLabel>
            <StyledInput
              type="text"
              name="occupation"
              id="occupation"
              value={formData.occupation}
              onChange={handleChange}
            />
          </StyledInputWrapper>
          {errors.occupation && (
            <p style={{ color: "red" }}>{errors.occupation}</p>
          )}
          <StyledInputWrapper>
            <StyledLabel htmlFor="callMobile">Call Mobile: </StyledLabel>
            <StyledInput
              type="text"
              name="callMobile"
              id="callMobile"
              value={formData.callMobile}
              onChange={handleChange}
            />
          </StyledInputWrapper>
          {errors.callMobile && (
            <p style={{ color: "red" }}>{errors.callMobile}</p>
          )}
          <StyledInputWrapper>
            <StyledLabel htmlFor="callOffice">Call Office: </StyledLabel>
            <StyledInput
              type="text"
              name="callOffice"
              id="callOffice"
              value={formData.callOffice}
              onChange={handleChange}
            />
          </StyledInputWrapper>
          {errors.callOffice && (
            <p style={{ color: "red" }}>{errors.callOffice}</p>
          )}
          <StyledInputWrapper>
            <StyledLabel htmlFor="email">Email: </StyledLabel>
            <StyledInput
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
          </StyledInputWrapper>
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          <StyledButton>Add Employee</StyledButton>
        </form>
      </StyledFormContainer>
    </>
  );
}

export default AddEmployee;
