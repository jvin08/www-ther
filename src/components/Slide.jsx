import React from "react";
import styled from "styled-components";

const TempBox = styled.div`
  position: relative;
  width: 110px;
  height: 110px;
  text-align: center;
  color: white;
  text-shadow: 0 0 3px black;
`;

const Text = styled.p`
  margin: 0;
  font-size: 0.8rem;
`;
const TextBox = styled.div`
  margin-top: 1.3rem;
  font-size: 0.8rem;
`;
const LowText = styled.p`
  margin: auto;
  font-size: 0.6rem;
`;

const Slide = ({
  weatherImage,
  tempName,
  tempSize,
  fahrenheit,
  skyCondition
}) => {
  const units = fahrenheit === true ? "°F" : "°C";
  return (
    <TempBox
      style={{
        background: `url(${weatherImage})`,
        opacity: "0.65"
      }}
    >
      <TextBox>
        <Text>{tempName}</Text>
        <Text
          style={{
            fontSize: "1.4rem",
            fontWeight: "bold",
            marginTop: "1rem"
          }}
        >
          {tempSize}
          {units}
        </Text>
        <LowText>{skyCondition}</LowText>
      </TextBox>
    </TempBox>
  );
};

export default Slide;
