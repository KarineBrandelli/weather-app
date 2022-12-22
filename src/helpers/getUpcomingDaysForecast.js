import moment from "moment";

// let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let months = ["Januray", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// let currentDate = new Date();
// let weekday = weekdays[currentDate.getDay()].substring(0, 3);
// let month = months[currentDate.getMonth()];
// let date = currentDate.getDate();

const getWeekday = (date) => moment(date).format("dddd").substring(0, 3);

const getUpcomingDaysForecast = (data) => {
  data.forecast.forecastday.slice(1).forEach((day) => ({
    // imgUrl: day.weather_state_abbr,
    temperature: Math.round(day.max_temp),
    weekday: getWeekday(day.applicable_date),
  }));
  console.log('test forecast') 
};


export default getUpcomingDaysForecast;
