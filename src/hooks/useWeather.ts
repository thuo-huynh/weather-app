import axios from "axios";
import { useLocation } from "./useLocation";
import { useEffect, useState } from "react";
import {
  CurrentWeatherModel,
  EmptyHourlyWeatherModel,
  HourlyWeatherModel,
} from "../models";
export const useWeather = (
  locationName: string,
  unit: string,
  useMockData: boolean,
) => {
  const baseUrl = process.env.REACT_APP_OPENWEATHER_API_BASEURL;
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

  const { location } = useLocation(locationName, useMockData);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hourlyWeather, setHourlyWeather] = useState<HourlyWeatherModel>(
    EmptyHourlyWeatherModel,
  );

  useEffect(() => {
    setIsLoading(true);
    if (location) {
      const url = useMockData
        ? `./mock-data/weather_${unit}.json`
        : `${baseUrl}?lat=${location.position.latitude}&lon=${location.position.longitude}&units=${unit}&exclude=minutely,alerts&appid=${apiKey}`;
      axios
        .get(url)
        .then((response) => {
          // setCurrent(response.data.current);
          setHourly(response.data.hourly);
          // setDaily(response.data.daily);
        })
        .catch((error) => {
          // handleError(error);
        })
        .finally(() => {
          setTimeout(() => setIsLoading(false), 100);
        });
    }
  }, []);

  const setHourly = (data: any) => {
    let hourly: CurrentWeatherModel[] = [];
    data.slice(0, 24).forEach((item: any) => {
      hourly.push({
        dt: item.dt,
        weather: {
          icon: item.weather[0].icon,
          description: item.weather[0].description,
        },
        temp: item.temp,
        feelsLike: item.feels_like,
        details: {
          rain: item.pop * 100,
          visibility: item.visibility / 1000,
          humidity: item.humidity,
          pressure: item.pressure,
          windSpeed: item.wind_speed,
        },
      });
    });
    setHourlyWeather({ hourly: hourly });
  };

  return {
    location,
    hourlyWeather,
  };
};
