import { useState } from "react";
import axios from "axios";

const BASE_URL = `http://api.weatherapi.com/v1/forecast.json?key=e28f5ea34d47486a80b194043221912`;

const useForecast = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  const getLocation = async (location) => {
    try {
      const { data } = await axios(`${BASE_URL}&q=${ location }&days=7&aqi=no&alerts=no`);
      const dataInformation = data.current;      
      
      console.log({ data });
      console.log({ dataInformation });
      
      if (data.erro) {
        throw Error("There is no such location");
      }
      
      return data;
      
    } catch (erro) {
      setError("There is no such location");
      setLoading(false);
    } 
  };

  const submitRequest = async location => {
    setLoading(true);
    setError(false);

    const response = await getLocation(location);

    console.log(response);
  };

  return {
    isError,
    isLoading,
    forecast,
    submitRequest,
  };
};

export default useForecast;
