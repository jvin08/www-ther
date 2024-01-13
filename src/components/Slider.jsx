import { useState } from "react";
import styled from "styled-components";
import Slide from "./Slide";
const Container = styled.div`
  padding-top: 1rem;
`;
const Title = styled.h4`
  margin: 1rem auto 0.5rem;
`;
const SlidesBox = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  width: 510px;
`;
const ArrowsBox = styled.div`
  display: flex;
  justify: space-between;
  width: 510px;
  padding-top: 1rem;
`;
const ArrowImage = styled.img`
  width: 18px;
  height: 14px;
  &:hover {
    cursor: pointer;
  }
`;

const Slider = ({ weather, fahrenheit, isLoading }) => {
  const [slidesMover, setSlidesMover] = useState(0);

  const arr = [
    ["Feels like", "feels", "feelsCelcius"],
    ["Max Temp.", "max", "maxCelcius"],
    ["Min Temp.", "min", "minCelcius"],
    ["Current", "fahrenheit", "celcius"]
  ];

  const slideForward = () => {
    if (slidesMover < 5) {
      setSlidesMover((prevSlide) => prevSlide + 1);
    }
  };
  const slideBackward = () => {
    if (slidesMover > 0) {
      setSlidesMover((prevSlide) => prevSlide - 1);
    }
  };

  return (
    <Container>
      <Title>Recent place</Title>

      <SlidesBox>
        {arr.map((property, index) => {
          return fahrenheit ? (
            <Slide
              weatherImage={weather.pictures?.[index + 1 + slidesMover]}
              key={Math.random()}
              tempName={property[0]}
              tempSize={weather[property[1]]}
              skyCondition={weather.description}
              fahrenheit={fahrenheit}
              isLoading={isLoading}
            />
          ) : (
            <Slide
              weatherImage={weather.pictures?.[index + 1 + slidesMover]}
              key={Math.random()}
              tempName={property[0]}
              tempSize={weather[property[2]]}
              skyCondition={weather.description}
              fahrenheit={fahrenheit}
              isLoading={isLoading}
            />
          );
        })}
      </SlidesBox>
      <ArrowsBox>
        <ArrowImage
          src="https://raw.githubusercontent.com/jvin08/weatherAPP/main/arrow.JPG"
          style={{ transform: "rotate(180deg)", marginRight: "auto" }}
          onClick={() => slideBackward()}
        />
        <ArrowImage
          src="https://raw.githubusercontent.com/jvin08/weatherAPP/main/arrow.JPG"
          onClick={() => slideForward()}
        />
      </ArrowsBox>
    </Container>
  );
};

export default Slider;
