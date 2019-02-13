import React, { Component } from "react";
import Loader from "../Presentational/Loader";
import { connect } from "react-redux";
import {
  fetchCurrentWeather,
  fetchLocation,
  fetchForecast
} from "../../actions";
import CurrentWeather from "../Presentational/CurrentWeather";
import Forecast from "../Presentational/Forecast";
import { MainWrapper } from "../../helpers/Global";
class WeatherContainer extends Component {
  state = { loaded: false };
  componentDidMount() {
    this.props.fetchLocation();
    if (this.props.weather && this.props.forecast) {
      this.setState({ loaded: true });
    }
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.userLocation.longitude !== prevProps.userLocation.longitude
    ) {
      this.props
        .fetchCurrentWeather(
          this.props.userLocation.latitude,
          this.props.userLocation.longitude
        )
        .then(() => {
          this.props.fetchForecast(
            this.props.userLocation.latitude,
            this.props.userLocation.longitude
          );
        })
        .then(() => {
          this.setState({ loaded: true });
        });
    }
  }

  render() {
    const { name, main, weather, wind } = this.props.weather;
    const finishedLoading =
      this.state.loaded &&
      name &&
      main &&
      weather &&
      wind &&
      this.props.forecast.list;

    return (
      <>
        {finishedLoading ? (
          <MainWrapper>
            <CurrentWeather
              city={name}
              temp={main.temp}
              humidity={main.humidity}
              description={weather[0].description}
              icon={weather[0].icon}
              windSpeed={wind.speed}
            />
            <Forecast weatherList={this.props.forecast.list} />
          </MainWrapper>
        ) : (
          <Loader />
        )}
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    weather: state.currentWeather,
    userLocation: state.userLocation,
    forecast: state.forecast
  };
};
export default connect(
  mapStateToProps,
  { fetchCurrentWeather, fetchLocation, fetchForecast }
)(WeatherContainer);
