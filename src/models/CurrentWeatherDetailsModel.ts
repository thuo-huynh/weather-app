export interface CurrentWeatherDetailsModel {
  rain: number;
  humidity: number;
  pressure: number;
  visibility: number;
  windSpeed: number;
}

export const EmptyCurrentWeatherDetails: CurrentWeatherDetailsModel = {
  rain: 0,
  humidity: 0,
  pressure: 0,
  visibility: 0,
  windSpeed: 0,
};
