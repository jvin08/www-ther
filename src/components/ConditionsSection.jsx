import styled from "styled-components";
import { useState } from "react";
import ConditionCard from "./ConditionCard";

const Container = styled.div`
  margin: 0;
`;

const ConditionsSection = ({ weather, fahrenheit }) => {
  const [isLoading, setIsloading] = useState(weather === undefined);
  const conditions = [
    {
      icon: "https://raw.githubusercontent.com/jvin08/weatherAPP/main/rain.jpg",
      type: "Rain",
      size: fahrenheit ? "0 in." : "0 mm"
    },

    {
      icon: "https://raw.githubusercontent.com/jvin08/weatherAPP/main/wind.jpg",
      type: "Wind",
      size: fahrenheit
        ? weather.wind
          ? weather.wind + "miles"
          : "0 miles"
        : weather.windKilometers
        ? weather.windKilometers + "km"
        : "0km",
      degree: weather.windDeg
    },
    {
      icon:
        "https://raw.githubusercontent.com/jvin08/weatherAPP/main/cloud.jpg",
      type: "Cloudy",
      size: weather.cloud ? weather.cloud + "%" : "0%"
    },
    {
      icon:
        "https://raw.githubusercontent.com/jvin08/weatherAPP/main/drops.jpg",
      type: "Humidity",
      size: weather.humidity ? weather.humidity + "%" : "0%"
    }
  ];

  return (
    <Container>
      {!isLoading &&
        conditions.map((condition) => {
          return (
            <ConditionCard
              key={Math.random()}
              src={condition.icon}
              name={condition.type}
              size={condition.size}
              degree={condition.degree || null}
            />
          );
        })}
    </Container>
  );
};

export default ConditionsSection;
