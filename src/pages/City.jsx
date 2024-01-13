import  { useEffect, useState } from "react";
import Header from "../components/Header";
import WeatherBox from "../components/WeatherBox";
import styled from "styled-components";
import Loading from "../components/Loading";

import axios from "axios";
import {
  getCityDataFromLocalStorage,
  weatherURL,
  currentTime,
  updateLocalStorageCityData,
  createCityWeatherObject,
  unsplashURL,
  uploadWeatherImagesURLs,
  twelveHourForecast
} from "../utils";
import { useParams } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
`;
const City = ({  fahrenheit }) => {
    const { cityId } = useParams()
  const [lastWeather, setLastWeather] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [forecast, setForecast] = useState({});

  const getWeather = async () => {
    if (
      getCityDataFromLocalStorage(cityId).time !== currentTime()
    ) {
      try {
        setIsLoading(true);
        const { data } = await axios(weatherURL(cityId));
        const backgroundTheme = data.weather[0].description;

        const { data: images } = await axios(unsplashURL(backgroundTheme));

        const { data: forecast } = await axios(
          `https://api.weatherapi.com/v1/forecast.json?key=621d73619fb0404082d141818231112&q=${cityId}&days=2`
        );
        setForecast(twelveHourForecast(forecast));

        const tenImagesArray = uploadWeatherImagesURLs(images.results);
        const newData = createCityWeatherObject(
          data,
          tenImagesArray,
          twelveHourForecast(forecast)
        );
        updateLocalStorageCityData(cityId, newData);
        
        setLastWeather(newData);
      } catch (error) {
        console.log("error: ", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      const existentWeatherData = getCityDataFromLocalStorage(cityId);
      setForecast(existentWeatherData.forecast);
      setLastWeather(existentWeatherData);
    }
  };

  useEffect(() => {
    getWeather();
  }, [cityId]);

  return (
    <Container>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <WeatherBox
          weather={lastWeather}
          background={lastWeather.pictures}
          fahrenheit={fahrenheit}
          forecast={forecast}
        />
      )}
    </Container>
  );
};

export default City;
