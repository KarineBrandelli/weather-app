import moment from "moment";

const getCurrentDayForecast = (data, title) => ({
  weekday: moment(data.applicable_date).format("dddd"),
  date: moment(data.applicable_date).format("MMMM Do"),
  location: title,
  temperature: Math.round(data.temp_c),
  // weatherIcon: `https://www.metaweather.com/static/img/weather/${data.weather_state_abbr}.svg`,
  // weatherDescription: data.current.condition.text,
});

export default getCurrentDayForecast;
