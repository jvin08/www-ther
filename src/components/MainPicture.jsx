import styled from "styled-components";

const Container = styled.div``;
const Title = styled.h4`
  margin: 0.5rem auto;
`;
const ImageBox = styled.div`
  position: relative;
  text-shadow: 0 0 2px black;
  color: white;
  height: 165px;
  width: 510px;
  background-color: #f6f6f6;
  display: flex;
  box-sizing: border-box;
  padding: 1rem 2rem;
  overflow: hidden;
`;
const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
  cursor: pointer;
  opacity: 0.85;
  transition: transform 2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;
const Icon = styled.img`
  width: 50px;
  height: 50px;
`;
const WeatherDescription = styled.p`
  margin: 0;
`;
const Temperature = styled.h1`
  margin: -0.5rem auto 0.5rem;
`;
const City = styled.p`
  margin: 0;
`;
const IconBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: -1rem;
`;
const Conditions = styled.div`
  font-weight: bold;
  text-align: left;
  z-index: 999;
`;

const MainPicture = ({ weather, fahrenheit }) => {
  return (
    <Container>
      <Title>Recent place</Title>
      <ImageBox>
        <Conditions>
          <IconBox>
            <Icon src={weather.icon} alt={weather.description} />
            <WeatherDescription>{weather.description}</WeatherDescription>
          </IconBox>

          {fahrenheit ? (
            <Temperature>{weather.fahrenheit}°F</Temperature>
          ) : (
            <Temperature>{weather.celcius}°C</Temperature>
          )}

          <City>{weather.name}</City>
        </Conditions>
        <Image src={weather.pictures?.[0]} alt="main image" />
      </ImageBox>
    </Container>
  );
};

export default MainPicture;
