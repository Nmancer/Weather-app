import { combineReducers } from "redux";
import CurrentWeatherReducer from "./CurrentWeatherReducer";
import LocationReducer from "./LocationReducer";
import ForecastReducer from "./ForecastReducer";
export default combineReducers({
  currentWeather: CurrentWeatherReducer,
  userLocation: LocationReducer,
  forecast: ForecastReducer
});
