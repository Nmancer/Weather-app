const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchCurrentWeather = (latitude, longitude) => async dispatch => {
  // grab from weather data from api
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
  )
    .then(response => response.json())
    .then(data => dispatch({ type: "FETCH_CURRENTWEATHER", payload: data }));
};
export const fetchForecast = (latitude, longitude) => async dispatch => {
  // grab from weather forecast from api
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
  )
    .then(response => response.json())
    .then(data => dispatch({ type: "FETCH_FORECAST", payload: data }));
};
export const fetchLocation = () => async dispatch => {
  //get user's latitude and longitude with geolocation api
  if (!navigator.geolocation) {
    return;
  }
  navigator.geolocation.getCurrentPosition(
    async position => {
      const latitude = await position.coords.latitude;
      const longitude = await position.coords.longitude;
      dispatch({ type: "FETCH_LOCATION", payload: { latitude, longitude } });
    },
    error => console.log(error)
  );
};
