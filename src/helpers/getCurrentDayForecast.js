let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "Januray",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let currentDate = new Date();
let weekday = weekdays[currentDate.getDay()];
let month = months[currentDate.getMonth()];
let date = currentDate.getDate();

const getCurrentDayForecast = (data) => ({
  weekday: weekday,
  date: `${month + " " + date}`,
  country: data.location.country,
  location: data.location.name,
  temperature: Math.round(data.current.temp_c),
  weatherIcon: data.current.condition.icon,
  weatherDescription: data.current.condition.text,
});

export default getCurrentDayForecast;
