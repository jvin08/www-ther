import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border-left: 3px solid white;
  box-sizing: border-box;
  padding: 0.8rem 1.5rem;
  cursor: pointer;
  &:hover {
    border-left: 3px solid black;
    background-color: #f6f6f6;
    transition: border-left 2s;
  }
`;
const Icon = styled.img`
  width: 30px;
`;
const Data = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Name = styled.h4`
  font-size: 0.8rem;
  margin: 0;
`;
const Size = styled.h4`
  font-size: 0.8rem;
  margin: 0;
`;
const Text = styled.p`
  font-size: 0.6rem;
`;
const ArrowImage = styled.img`
  width: 18px;
  height: 14px;
  margin-left: auto;
  margin-right: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;

const ConditionCard = ({ src, name, size, degree }) => {
  return (
    <Container>
      <Icon src={src} />
      <Data>
        <Name>{name}</Name>
        {degree && (
          <ArrowImage
            style={{ transform: `rotate(${-degree}deg)` }}
            src="https://raw.githubusercontent.com/jvin08/weatherAPP/main/arrow.JPG"
          />
        )}
        <Size>{size}</Size>
      </Data>
      <Text>
        The air quality is generally acceptable for most individuals. However,
        sensitive groups may experience minor to moderate symptoms from
        long-term exposure.
      </Text>
    </Container>
  );
};
export default ConditionCard;
