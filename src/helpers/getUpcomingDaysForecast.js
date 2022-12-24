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
let weekday = currentDate.getDay()

let firstweekday = weekdays[(currentDate).getDay() + 1];
let secondweekday = weekdays[(currentDate).getDay() + 2];


// if (firstweekday === 'Saturday') {
//   secondweekday = weekdays[0]
// }



for (let i = 0; i < weekdays.length; i++) {
  if (i = 0) {
    firstweekday = "Monday";
    secondweekday = "Tuesday";
  } else if (i = 1) {
    firstweekday = "Tuesday";
    secondweekday = "Wednesday";
  } else if (i = 2) {
    firstweekday = "Wednesday";
    secondweekday = "Thursday";
  } else if (i = 3) {
    firstweekday = "Thursday";
    secondweekday = "Friday";
  } else if (i = 4) {
    firstweekday = "Friday";
    secondweekday = "Saturday";
  } else if (i = 5) {
    firstweekday = "Saturday";
    secondweekday = "Sunday";
  } else if (i = 6) {
    firstweekday = "Sunday";
    secondweekday = "Monday";
  }
};

// if (firstweekday === 'Sunday') {
//   secondweekday = weekend
// }

const getUpcomingDaysForecast = (data) => ({
  nextdaytemperature: Math.round(data.forecast.forecastday[1].day.maxtemp_c),
  firstImgUrl: data.forecast.forecastday[1].day.condition.icon,
  firstweekday: firstweekday,
  twodaystemperature: Math.round(data.forecast.forecastday[2].day.maxtemp_c),
  secondImgUrl: data.forecast.forecastday[2].day.condition.icon,
  secondweekday: secondweekday,
});

export default getUpcomingDaysForecast;
