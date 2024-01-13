import  { useEffect, useState } from "react";
import Header from "../components/Header";
import WeatherBox from "../components/WeatherBox";
import styled from "styled-components";
import axios from "axios";
import {
  unsplashURL,
  createCityWeatherObject,
  uploadWeatherImagesURLs,
  twelveHourForecast
} from "../utils";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { useParams } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
`;

const Home = ({ fahrenheit }) => {
  const [localWeather, setLocalWeather] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [forecast, setForecast] = useState({});

  const getCurrentUserWeather = async () => {
    try {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(async function (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const { data } = await axios(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9d9009d024ad053398936601c3fbba9a&units=imperial`
        );
        const backgroundTheme = data.weather[0].description;

        const { data: pictures } = await axios(unsplashURL(backgroundTheme));

        const { data: forecast } = await axios(
          `https://api.weatherapi.com/v1/forecast.json?key=621d73619fb0404082d141818231112&q=${data.name}&days=2`
        );
        setForecast(twelveHourForecast(forecast));

        const tenPicturesURLs = uploadWeatherImagesURLs(pictures.results);

        setLocalWeather(
          createCityWeatherObject(data, tenPicturesURLs, forecast)
        );
      });
    } catch (error) {
      setError(true);
      setTimeout(() => setError(false), 2000);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCurrentUserWeather();
  }, []);

  return (
    <Container>
      <Header />
      {isLoading || error ? (
        <Loading />
      ) : (
        <WeatherBox
          weather={localWeather}
          forecast={forecast}
          fahrenheit={fahrenheit}
          isLoading={isLoading}
        />
      )}
    </Container>
  );
};

export default Home;
