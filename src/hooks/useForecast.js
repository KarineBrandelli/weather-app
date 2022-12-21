import { useState } from "react";
import axios from "axios";

import getCurrentDayForecast from "../helpers/getCurrentDayForecast.js";
import getCurrentDayDetailedForecast from "../helpers/getCurrentDayDetailedForecast.js";
import getUpcomingDaysForecast from "../helpers/getUpcomingDaysForecast.js";

const BASE_URL = `http://api.weatherapi.com/v1/forecast.json?key=e28f5ea34d47486a80b194043221912`;

const useForecast = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let month = ["Januray", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const date = new Date();
  const testeSemana = weekday[date.getDay()];
  console.log(testeSemana)
  console.log(month[date.getMonth()]);
  console.log(date.getDate())
  // const dateString = date.toDateString();
  // console.log(dateString)

  const getLocation = async (location) => {
    try {
      const { data } = await axios(`${BASE_URL}&q=${ location }&days=7&aqi=no&alerts=no`);
      
      console.log(getCurrentDayForecast(data));      
      console.log({ data });
      
      if (data.erro) {
        throw Error("There is no such location");
      }
      
      return data;
      
    } catch (erro) {
      setError("There is no such location");
      setLoading(false);
    } 
  };

  const gatherForecastData = (data) => {
    getCurrentDayForecast();
    // getCurrentDayDetailedForecast();
    // getUpcomingDaysForecast();
  };

  const submitRequest = async location => {
    setLoading(true);
    setError(false);

    const response = await getLocation(location);

    gatherForecastData();
  };

  return {
    isError,
    isLoading,
    forecast,
    submitRequest,
  };
};

export default useForecast;
