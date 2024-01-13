import { useState } from "react";
import styled from "styled-components";
import Slider from "./Slider";
import MainPicture from "./MainPicture";
import Chart from "./Chart";

const Container = styled.div`
  box-sizing: border-box;
  padding: 1.5rem 2.5rem 3rem;
  border-right: 1px solid #e8e8e8;
  margin: 0;
  background-color: white;
  width: 60%;
`;
const ChartButton = styled.div`
  text-align: center;
  background: #f6f6f6;
  width: 75px;
  border-radius: 3px;
  margin: auto;
  margin-top: 1rem;
  padding: 0.2rem 0 0.3rem;
  cursor: pointer;
  &:hover {
    background: #c5c5c5;
  }
`;

const TemperatureSection = ({ weather, fahrenheit, forecast, isLoading }) => {
  const [chart, setChart] = useState(false);

  const toggleChart = () => {
    setChart((prevChart) => !prevChart);
  };

  return (
    <Container>
      <div>
        <MainPicture weather={weather} fahrenheit={fahrenheit} />
        {chart ? (
          <Chart
            cityName={weather.name}
            forecast={forecast}
            chart={chart}
            fahrenheit={fahrenheit}
          />
        ) : (
          <Slider
            weather={weather}
            fahrenheit={fahrenheit}
            isLoading={isLoading}
          />
        )}
        <ChartButton onClick={toggleChart}>
          {chart ? "Slider" : "Chart"}
        </ChartButton>
      </div>
    </Container>
  );
};

export default TemperatureSection;
