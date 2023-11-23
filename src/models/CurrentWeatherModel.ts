import { CurrentWeatherDetailsModel, EmptyWeather, WeatherModel } from ".";

export interface CurrentWeatherModel {
  dt: number;
  weather: WeatherModel;
  temp: number;
  feelsLike: number;
  details?: CurrentWeatherDetailsModel;
}

export const EmptyCurrentWeather: CurrentWeatherModel = {
  dt: 0,
  weather: EmptyWeather,
  temp: 0,
  feelsLike: 0,
  details: undefined,
};
