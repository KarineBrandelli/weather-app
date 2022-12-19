import { useState } from "react";
import axios from "axios";

const BASE_URL = "http://api.weatherapi.com/v1/forecast.json?key=e28f5ea34d47486a80b194043221912&q=London&days=7&aqi=no&alerts=no";

const useForecast = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  const submitRequest = async location => {
    const response = await fetch(BASE_URL);
    const responseConvert = await response.json();
    console.log({ responseConvert });
  };

  return {
    isError,
    isLoading,
    forecast,
    submitRequest
  }
};

export default useForecast;
