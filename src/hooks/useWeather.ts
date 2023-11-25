import axios from "axios";
import { useLocation } from "./useLocation";
import { useState } from "react";
export const useWeather = (
  locationName: string,
  unit: string,
  useMockData: boolean,
) => {
  const baseUrl = process.env.REACT_APP_OPENWEATHER_API_BASEURL;
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

  const { location } = useLocation(locationName, useMockData);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return {
    location,
  };
};
