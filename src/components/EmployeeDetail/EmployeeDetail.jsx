import styled from "styled-components";
import { EmployeeContext } from "../../employeeContext";
import { useContext } from "react";

const StyledEmployeeDetailCard = styled.div`
  display: flex;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  margin: 4rem 0rem;
  min-width: 300px;
  padding: 0.75rem;
`;

const StyledEmployeeDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
`;
const StyledImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const StyledDetailContent = styled.div`
  margin: 0.75rem 0;
`;

const StyledParagraph = styled.p`
  font-size: 0.8rem;
`;

const EmployeeDetail = (props) => {
  const { employeeList } = useContext(EmployeeContext);

  const employeeDetail = employeeList.find(
    (employee) => employee.id === props.employeeId
  );

  if (!props.employeeId) {
    return;
  }

  return (
    <StyledEmployeeDetailCard>
      {employeeList && (
        <StyledEmployeeDetail>
          <StyledProfile>
            <StyledImage src={employeeDetail.profilePicture} alt="" />
            <p>
              <strong>{employeeDetail.name}</strong>
            </p>
          </StyledProfile>
          <hr />
          <div>
            <StyledDetailContent>
              <p>
                <strong>Occupation</strong>
              </p>
              <StyledParagraph>{employeeDetail.occupation}</StyledParagraph>
            </StyledDetailContent>
            <hr />
            <StyledDetailContent>
              <p>
                <strong>Call Mobile</strong>
              </p>
              <StyledParagraph>{employeeDetail.callMobile}</StyledParagraph>
            </StyledDetailContent>
            <hr />

            <StyledDetailContent>
              <p>
                <strong>Call Office</strong>
              </p>
              <StyledParagraph>{employeeDetail.callOffice}</StyledParagraph>
            </StyledDetailContent>
            <hr />

            <StyledDetailContent>
              <p>
                <strong>Email</strong>
              </p>
              <StyledParagraph>{employeeDetail.email}</StyledParagraph>
            </StyledDetailContent>
          </div>
        </StyledEmployeeDetail>
      )}
    </StyledEmployeeDetailCard>
  );
};

export default EmployeeDetail;
