const iconMap = new Map([
  ["01d", "wi wi-day-sunny"],
  ["02d", "wi wi-day-cloudy-high"],
  ["03d", "wi wi-day-cloudy"],
  ["04d", "wi wi-day-cloudy"],
  ["09d", "wi wi-day-showers"],
  ["10d", "wi wi-day-rain"],
  ["11d", "wi wi-day-thunderstorm"],
  ["13d", "wi wi-day-snow"],
  ["50d", "wi wi-day-fog"],

  ["01n", "wi wi-night-clear"],
  ["02n", "wi wi-night-partly-cloudy"],
  ["03n", "wi wi-night-cloudy"],
  ["04n", "wi wi-night-cloudy-high"],
  ["09n", "wi wi-night-showers"],
  ["10n", "wi wi-night-rain"],
  ["11n", "wi wi-night-thunderstorm"],
  ["13n", "wi wi-night-snow"],
  ["50n", "wi wi-night-fog"]
]);
const iconChanger = icon => {
  return iconMap.get(icon);
};
export { iconChanger };
