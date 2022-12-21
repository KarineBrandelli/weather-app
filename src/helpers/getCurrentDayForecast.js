import moment from "moment";

const getCurrentDayForecast = (data) => ({
  weekday: moment(data.applicable_date).format("dddd"),
  date: moment(data.applicable_date).format("MMMM Do"),
  country: data.location.country,
  location: data.location.name,
  temperature: Math.round(data.current.temp_c),
  // weatherIcon: `https://www.metaweather.com/static/img/weather/${data.weather_state_abbr}.svg`,
  weatherDescription: data.current.condition.text,
});

export default getCurrentDayForecast;
