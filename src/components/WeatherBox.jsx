import TemperatureSection from "./TemperatureSection";
import ConditionsSection from "./ConditionsSection";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const WeatherBox = ({ weather, fahrenheit, isLoading, forecast }) => {
  return (
    <Container>
      <TemperatureSection
        weather={weather}
        fahrenheit={fahrenheit}
        isLoading={isLoading}
        forecast={forecast}
      />
      <ConditionsSection weather={weather} fahrenheit={fahrenheit} />
    </Container>
  );
};

export default WeatherBox;
