import { useEffect, useState } from "react";
import Logo from "./components/Logo/Logo";
import CurrentLocation from "./components/CurrentLocation";
import Form from "./components/Form";
import CitiesLinks from "./components/CitiesLinks";
import axios from "axios";
import {
  checkIfLocalStorageExists,
  createCityWeatherObject,
  unsplashURL,
  uploadWeatherImagesURLs,
  twelveHourForecast
} from "../../utils";

const Sidebar = ({ handleFahrenheit, fahrenheit }) => {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState("Current location...");
  const [userPlace, setUserPlace] = useState([]);

  const getUserCity = () => {
    const currentCity = checkIfLocalStorageExists("myCity") || [];
    const savedCities = checkIfLocalStorageExists("cities") || [];
    setCities(savedCities);
    try {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(async function (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const { data } = await axios(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9d9009d024ad053398936601c3fbba9a&units=imperial`
        );

        const BackgroundTheme = data.weather[0].description;
        const { data: pictures } = await axios(unsplashURL(BackgroundTheme));
        const { data: forecast } = await axios(
          `https://api.weatherapi.com/v1/forecast.json?key=621d73619fb0404082d141818231112&q=${data.name}&days=2`
        );
        const tenPicturesURLs = uploadWeatherImagesURLs(pictures.results);
        const currentCityWeather = createCityWeatherObject(
          data,
          tenPicturesURLs,
          twelveHourForecast(forecast)
        );
        setUserPlace(currentCityWeather);

        if (currentCity.length === 0 || currentCity[0] !== data.name) {
          window.localStorage.setItem(
            "myCity",
            JSON.stringify(currentCityWeather)
          );
        }
      });
      setIsLoading(false);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (city.length && !cityExists(city)) {
      try {
        setIsLoading(true);
        const { data } = await axios(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9d9009d024ad053398936601c3fbba9a&units=imperial`
        );

        const { data: forecast } = await axios(
          `https://api.weatherapi.com/v1/forecast.json?key=621d73619fb0404082d141818231112&q=${city}&days=2`
        );

        const BackgroundTheme = data.weather[0].description;

        const { data: pictures } = await axios(unsplashURL(BackgroundTheme));
        const picturesForStorage = uploadWeatherImagesURLs(pictures.results);
        const newData = createCityWeatherObject(
          data,
          picturesForStorage,
          twelveHourForecast(forecast)
        );

        const newCities = [...cities, newData];
        updateStore(newCities);
        setIsLoading(false);
      } catch (error) {
        setPlaceholder("Request failed...");
        setTimeout(() => setPlaceholder("Current location..."), 3000);
        setIsLoading(false);
      }
    }
    setCity("");
  };

  const cityExists = (cityName) => {
    if (cities.length === 0) {
      return false;
    } else {
      return (
        cities.find(
          (place) => place.name.toUpperCase() === cityName.toUpperCase()
        ) !== undefined
      );
    }
  };
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const deleteCity = (e) => {
    const cityName = e.target.dataset.delete;
    const newCities = cities.filter((place) => place.name !== cityName);
    updateStore(newCities);
  };

  const updateStore = (list) => {
    const savedCities = checkIfLocalStorageExists("cities") || [];
    if (savedCities.length) {
      window.localStorage.removeItem("cities");
    }
    window.localStorage.setItem("cities", JSON.stringify(list));
    setCities(list);
  };

  useEffect(() => {
    getUserCity();
  }, []);

  return (
    <nav>
      <Logo />
      <CurrentLocation userPlace={userPlace} />
      <Form
        handleSubmit={handleSubmit}
        error={error}
        placeholder={placeholder}
        handleChange={handleChange}
        handleFahrenheit={handleFahrenheit}
        fahrenheit={fahrenheit}
        city={city}
      />
      {!isLoading && (
        <CitiesLinks
          cities={cities}
          fahrenheit={fahrenheit}
          deleteCity={deleteCity}
          isLoading={isLoading}
        />
      )}
    </nav>
  );
};

export default Sidebar;
