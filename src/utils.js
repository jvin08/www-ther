export const weatherKey = "9d9009d024ad053398936601c3fbba9a";

export function weatherURL(city) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherKey}&units=imperial`;
}
export function localWeatherURL(coordinates) {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates[0]}&lon=${coordinates[1]}&appid=${weatherKey}&units=imperial`;
}

export function localStorageCity() {
  return JSON.parse(window.localStorage.getItem("myCity"));
}

export function uploadWeatherImagesURLs(data) {
  let tenImages = [];
  for (let i = 0; i < 10; i++) {
    tenImages.push(data[i].urls.small);
  }
  return tenImages;
}

export function unsplashURL(backgroundDescription) {
  return `https://api.unsplash.com/search/photos?client_id=IJAvY1wryZ1FGoVbPUIxjKxkbF8TXW2QqHsiVC2CenE&page=${Math.floor(
    Math.random() * 10
  )}&query=${backgroundDescription}`;
}

export function getCityFromStorage() {
  return JSON.parse(window.localStorage.getItem("myCity"));
}
export function currentTime() {
  return new Date().getHours();
}

export function getCityDataFromLocalStorage(cityName) {
  const localStorageCities = JSON.parse(window.localStorage.getItem("cities"));
  const cityData = localStorageCities.filter((city) => {
    return city.name === cityName;
  });
  return cityData[0];
}

export function updateLocalStorageCityData(cityName, updatedData) {
  const removeOldData = JSON.parse(
    window.localStorage.getItem("cities")
  ).filter((city) => {
    return city.name !== cityName;
  });
  const prepareDataForLocalStorage = [...removeOldData, updatedData];
  window.localStorage.setItem(
    "cities",
    JSON.stringify(prepareDataForLocalStorage)
  );
}
export function updatePictures(cityName, pictures) {
  const updatedData = JSON.parse(window.localStorage.getItem("cities")).map(
    (city) => {
      if (city.city === cityName) {
        city.pictures = pictures;
      }
    }
  );
  window.localStorage.setItem("cities", JSON.stringify(updatedData));
}

export function getCelcius(fahrenheit) {
  return Math.round(((fahrenheit - 32) / 9) * 5);
}
export function getKilometers(miles) {
  return (miles * 1.6).toFixed(2);
}
export function getMilimeters(inches) {
  return inches * 25.4;
}
export function checkIfLocalStorageExists(storageName) {
  return JSON.parse(window.localStorage.getItem(storageName));
}
export function createCityWeatherObject(data, picturesURLs, forecast) {
  return {
    name: data.name,
    country: data.sys.country,
    fahrenheit: Math.round(data.main.temp),
    celcius: getCelcius(data.main.temp),
    feels: Math.round(data.main.feels_like),
    feelsCelcius: getCelcius(data.main.feels_like),
    max: Math.round(data.main.temp_max),
    maxCelcius: getCelcius(data.main.temp_max),
    min: Math.round(data.main.temp_min),
    minCelcius: getCelcius(data.main.temp_min),
    icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    description: data.weather[0].description,
    wind: data.wind.speed,
    windDeg: data.wind.deg,
    windKilometers: getKilometers(data.wind.speed),
    cloud: data.clouds.all,
    humidity: data.main.humidity,
    time: new Date().getHours(),
    rain: 1,
    rainMillimeters: 25,
    pictures: picturesURLs || [],
    forecast: forecast
  };
}
export function twelveHourForecast(data) {
  const dayOne = data.forecast.forecastday[0].hour;
  const dayTwo = data.forecast.forecastday[1].hour;
  const currentHour = new Date().getHours();
  const twelveHourData =
    currentHour > 12
      ? [...dayOne, ...dayTwo].slice(currentHour, currentHour + 12)
      : dayOne.slice(currentHour, currentHour + 12);
  const weatherObjects = [];
  for (const hour of twelveHourData) {
    const hourData = {
      icon: hour.condition.icon,
      time: hour.time.slice(11),
      temp_f: Math.round(hour.temp_f),
      temp_c: Math.round(hour.temp_c)
    };
    weatherObjects.push(hourData);
  }
  return weatherObjects;
}

export function minTempFahrenheit(array) {
  const minTemp = array.reduce(
    (accumulator, currentObj) => {
      const currentPrice = currentObj.temp_f;
      return currentPrice < accumulator.temp_f
        ? { temp_f: currentPrice }
        : accumulator;
    },
    { temp_f: Infinity }
  );
  return minTemp.temp_f;
}

export function minTempCelcius(array) {
  const minTemp = array.reduce(
    (accumulator, currentObj) => {
      const currentPrice = currentObj.temp_c;
      return currentPrice < accumulator.temp_c
        ? { temp_c: currentPrice }
        : accumulator;
    },
    { temp_c: Infinity }
  );
  return minTemp.temp_c;
}
