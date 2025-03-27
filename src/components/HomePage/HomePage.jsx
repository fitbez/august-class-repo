import styled from "styled-components";
import HeroImage from "../../assets/hero.avif";

const StyledHeroContent = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
`;

function HomePage(props) {
  return (
    <>
      <img width="100%" src={HeroImage} alt="" />
      <StyledHeroContent>
        <StyledHeading style={{ fontSize: "48px", textAlign: "center" }}>
          Welcome to the Employee Page
        </StyledHeading>
        <StyleParagraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At dicta
          quibusdam delectus placeat quaerat amet alias ex molestias, tempora
          iste minus autem est veniam beatae adipisci ullam quae a? Ipsum!
        </StyleParagraph>
        <StyledButton>Learn More</StyledButton>
      </StyledHeroContent>
    </>
  );
}

export default HomePage;
