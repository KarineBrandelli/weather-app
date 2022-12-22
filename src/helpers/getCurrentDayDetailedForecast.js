const currentDayForecast = (data) => [
  {
    name: "predictability",
    value: data.forecast.forecastday[0].day.daily_chance_of_rain,
    unit: "%",
  },
  {
    name: "humidity",
    value: data.forecast.forecastday[0].day.avghumidity,
    unit: "%",
  },
  {
    name: "wind",
    value: Math.round(data.forecast.forecastday[0].day.maxwind_kph),
    unit: "km/h",
  },
  // {
  //   name: "air pressure",
  //   value: data.air_pressure,
  //   unit: "mb",
  // },
  {
    name: "max temp",
    value: Math.round(data.forecast.forecastday[0].day.maxtemp_c),
    unit: "°C",
  },
  {
    name: "min temp",
    value: Math.round(data.forecast.forecastday[0].day.mintemp_c),
    unit: "°C",
  },
];

export default currentDayForecast;
