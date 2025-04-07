import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledHeroContent = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #fff;
  opacity: 90%;
  height: calc(100vh - 76px);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(https://images.pexels.com/photos/7794041/pexels-photo-7794041.jpeg?auto=compress&cs=tinysrgb&w=600);
`;

const StyledHeading = styled.h2`
  font-size: 48px;
  text-align: center;
`;

const StyleParagraph = styled.p`
  text-align: center;
`;

export const StyledButton = styled.button`
  padding: 10px 15px;
  color: #fff;
  background: #2196f3;
  border: none;
  border-radius: 4px;
  width: 100%;
  margin-top: 1rem;
  cursor: pointer;
`;

const StyledHeroButton = styled(StyledButton)`
  width: 100px;
`;

const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

const StyledContent = styled.div`
  z-index: 2;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

function HomePage(props) {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/add-employee");
  };
  return (
    <>
      <StyledHeroContent>
        <StyledOverlay></StyledOverlay>
        <StyledContent>
          <StyledHeading style={{ fontSize: "48px", textAlign: "center" }}>
            Welcome to the Employee Page
          </StyledHeading>
          <StyleParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At dicta
            quibusdam delectus placeat quaerat amet alias ex molestias, tempora
            iste minus autem est veniam beatae adipisci ullam quae a? Ipsum!
          </StyleParagraph>
          <StyledHeroButton onClick={handleLearnMore}>
            Learn More
          </StyledHeroButton>
        </StyledContent>
      </StyledHeroContent>
    </>
  );
}

export default HomePage;
