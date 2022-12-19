import { useState } from "react";

const useForecast = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  const submitRequest = async location => {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=e28f5ea34d47486a80b194043221912&q=${ location }&days=7&aqi=no&alerts=no`);
    const responseConvert = await response.json();
    
    console.log({ responseConvert });
    console.log({ location });
  };

  return {
    isError,
    isLoading,
    forecast,
    submitRequest
  }
};

export default useForecast;
