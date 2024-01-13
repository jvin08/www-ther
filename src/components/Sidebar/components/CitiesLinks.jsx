import { Link } from "react-router-dom";
import styled from "styled-components";

const Location = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
`;

const FlagImage = styled.img`
  width: 24px;
  height: 15px;
  margin: 0.75rem;
  margin-left: 0;
  padding: 0.9rem 0.7rem;
  background-color: #f6f6f6;
  border-radius: 3px;
  opacity: 0.7;
`;
const CityLocationName = styled.div`
  text-transform: uppercase;
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
`;
const Country = styled.p`
  font-weight: bold;
`;
const City = styled.p`
  margin-left: 0.8rem;
`;

const CityTemperature = styled.p`
  font-weight: bold;
`;
const ArrowImage = styled.img`
  width: 18px;
  height: 14px;
  margin-left: 1.5rem;
  &:hover {
    cursor: pointer;
  }
`;

const CitiesLinks = ({ cities, fahrenheit, deleteCity }) => {
  return (
    <div>
      <ul>
        {cities.map((city) => (
          <li key={Math.random()}>
            <button data-delete={city.name} onClick={deleteCity}>
              x
            </button>
            <Location>
              <FlagImage
                src={`https://raw.githubusercontent.com/jvin08/allflags/main/${city.country.toLowerCase()}.png`}
              />

              <CityLocationName>
                <Country>{city.country}</Country>
                <City>{city.name}</City>
              </CityLocationName>
            </Location>
            {fahrenheit ? (
              <CityTemperature>{city.fahrenheit}°F</CityTemperature>
            ) : (
              <CityTemperature>{city.celcius}°C</CityTemperature>
            )}
            <Link to={`/city/${city.name}`}>
              <ArrowImage src="https://raw.githubusercontent.com/jvin08/weatherAPP/main/arrow.JPG" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CitiesLinks;
