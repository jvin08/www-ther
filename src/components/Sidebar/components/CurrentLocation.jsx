import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const CurrentLocationLink = styled.div`
  margin: 0.5rem auto 0.5rem 1.7rem;
  display: flex;
  align-items: center;
`;
const FlagImageBox = styled.div`
  width: calc(24px + 1.5rem);
  height: calc(20px + 1.2rem);
  background-color: #f6f6f6;
  border-radius: 3px;
  margin: 0.7rem;
  margin-left: 0;
  position: relative;
`;
const FlagImage = styled.img`
  position: absolute;
  width: 24px;
  height: 15px;
  top: 30%;
  left: 25%;
  opacity: 0.5;
`;
const Spinner = styled.p`
  position: absolute;
  top: -10%;
  left: 48%;
  animation: spinRight 3s linear infinite;
`;

const Title = styled.p`
  margin: 0;
  font-size: 0.6rem;
  text-transform: uppercase;
  font-family: "Jura";
  color: #333;
`;

const CurrentLocationName = styled.h2`
  font-size: 0.9rem;
  margin: 0;
  color: #333;
`;

const CurrentLocation = ({ userPlace }) => {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => setIsLoading(false), 2000);
  const country = userPlace.country;
  const countrySmallText = country?.toLowerCase();
  const city = userPlace.name;
  return (
    <div>
      <CurrentLocationLink>
        <FlagImageBox>
          {!isLoading ? (
            <FlagImage
              src={`https://countryflagsapi.netlify.app/flag/${countrySmallText}.svg`}
            />
          ) : (
            <Spinner>I</Spinner>
          )}
        </FlagImageBox>
        <Link to={`/`}>
          <Title>Current location</Title>
          <CurrentLocationName>
            {country} - {city}
          </CurrentLocationName>
        </Link>
      </CurrentLocationLink>
    </div>
  );
};

export default CurrentLocation;
