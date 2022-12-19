import { useState } from "react";
import axios from "axios";

const useForecast = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  const submitRequest = async (location) => {
    try {
      const response = await axios(`http://api.weatherapi.com/v1/forecast.json?key=e28f5ea34d47486a80b194043221912&q=${location}&days=7&aqi=no&alerts=no`);

      console.log({ response });
      console.log({ location });

      const newResponse = `${response.data.location.lat} ${response.data.location.lon}`;
      console.log(newResponse);

      if (response.erro) {
        throw Error("There is no such location");
      }
    } catch (erro) {
      setError("There is no such location");
    }
  };

  return {
    isError,
    isLoading,
    forecast,
    submitRequest,
  };
};

export default useForecast;
