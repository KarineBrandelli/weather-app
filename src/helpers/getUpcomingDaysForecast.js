import moment from "moment";

let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let currentDate = new Date();
let weekday = weekdays[currentDate.getDay()].substring(0, 3);

const getUpcomingDaysForecast = (data) =>
  data.forecast.forecastday.slice(1).map((day) => ({
    // imgUrl: day.weather_state_abbr,
    temperature: Math.round(day.maxtemp_c),
    weekday: weekday,
}));

export default getUpcomingDaysForecast;
