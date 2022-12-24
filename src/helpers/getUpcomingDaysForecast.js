let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let currentDate = new Date();
let weekday = currentDate.getDay();

let firstweekday;
let secondweekday;

if ( weekday === 0 ) {
  firstweekday = "Monday";
  secondweekday = "Tuesday";
} else if ( weekday === 1 ) {
  firstweekday = "Tuesday";
  secondweekday = "Wednesday";
} else if ( weekday === 2 ) {
  firstweekday = "Wednesday";
  secondweekday = "Thursday";
} else if ( weekday === 3 ) {
  firstweekday = "Thursday";
  secondweekday = "Friday";
} else if ( weekday === 4 ) {
  firstweekday = "Friday";
  secondweekday = "Saturday";
} else if ( weekday === 5 ) {
  firstweekday = "Saturday";
  secondweekday = "Sunday";
} else if ( weekday === 6 ) {
  firstweekday = "Sunday";
  secondweekday = "Monday";
}

const getUpcomingDaysForecast = (data) => ({
  nextdaytemperature: Math.round(data.forecast.forecastday[1].day.maxtemp_c),
  firstImgUrl: data.forecast.forecastday[1].day.condition.icon,
  firstweekday: firstweekday,
  twodaystemperature: Math.round(data.forecast.forecastday[2].day.maxtemp_c),
  secondImgUrl: data.forecast.forecastday[2].day.condition.icon,
  secondweekday: secondweekday,
});

export default getUpcomingDaysForecast;
