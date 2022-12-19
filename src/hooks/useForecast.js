import { useState } from "react";
import axios from "axios";

const useForecast = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  const submitRequest = async location => {
    const { data } = await axios(`http://api.weatherapi.com/v1/forecast.json?key=e28f5ea34d47486a80b194043221912&q=${ location }&days=7&aqi=no&alerts=no`);

    console.log({ data });
    console.log({ location });

    if (!data || data.length === 0) {
      setError('There is no such location');
      return;
    };
  };

  return {
    isError,
    isLoading,
    forecast,
    submitRequest
  }
};

export default useForecast;
