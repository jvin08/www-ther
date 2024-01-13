import styled from "styled-components";
import { minTempCelcius, minTempFahrenheit } from "../utils";

const Container = styled.div`
  padding-top: 1rem;
  margin-bottom: 2rem;
`;

const Title = styled.h4`
  margin: 1rem auto 0.5rem;
`;

const ChartBox = styled.div`
  margin: 0 0 1.4rem;
  background-image: linear-gradient(royalblue, white);
  display: flex;

  justify-content: space-between;
  width: 510px;
  height: 124px;
`;

const Bar = styled.div`
  width: 40px;
  background: linear-gradient(orange, #f6f6f6);
  display: flex;
  flex-direction: column;
  margin-top: auto;
  color: white;
  border-radius: 7px;
  cursor: pointer;
  &:hover {
    scale: 1.05;
  }
`;
const Temperature = styled.p`
  margin: 0 auto auto;
  font-size: 0.8rem;
`;
const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin: auto;
`;
const Hour = styled.p`
  margin: auto auto -1.2rem;
  font-size: 0.7rem;
  color: #333;
`;

const Chart = ({ forecast, fahrenheit, chart }) => {
  const min_temp = fahrenheit
    ? minTempFahrenheit(forecast)
    : minTempCelcius(forecast);

  return (
    <Container>
      <Title>{chart ? "12-hour forecast" : "Recent place"}</Title>
      <ChartBox>
        {forecast.map((hour) => {
          let unit = fahrenheit ? "°F" : "°C";
          let unitProp = fahrenheit ? "temp_f" : "temp_c";
          return (
            <Bar
              key={Math.random()}
              style={{
                height: `${(hour[unitProp] - min_temp) * 5 + 60}px`
              }}
            >
              <Temperature>
                {hour[unitProp]}
                {unit}
              </Temperature>
              <Icon src={hour.icon} />
              <Hour>{hour.time}</Hour>
            </Bar>
          );
        })}
      </ChartBox>
    </Container>
  );
};
export default Chart;
