import { EmptyWeather, WeatherModel } from "./WeatherModel";

export interface DailyWeatherDetailsModel {
  dt: number;
  rain: number;
  humidity: number;
  pressure: number;
  clouds: number;
  windSpeed: number;
  uvi: number;
  sunrise: number;
  sunset: number;
  minTemp: number;
  maxTemp: number;
  weather: WeatherModel;
}

export const EmptyDailyWeatherDetails: DailyWeatherDetailsModel = {
  dt: 0,
  rain: 0,
  humidity: 0,
  pressure: 0,
  clouds: 0,
  windSpeed: 0,
  uvi: 0,
  sunrise: 0,
  sunset: 0,
  minTemp: 0,
  maxTemp: 0,
  weather: EmptyWeather,
};
