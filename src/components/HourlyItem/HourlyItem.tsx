import React from "react";
import { CurrentWeatherModel, SettingsModel } from "../../models";

interface HourlyItemProps {
  settings: SettingsModel;
  data: CurrentWeatherModel;
}

export default function HourlyItem({ data, settings }: HourlyItemProps) {
  const weatherCode =
    settings.theme === "dark"
      ? `${data.weather.icon}_n`
      : `${data.weather.icon}`;
  const unitSymbol = settings.unit === "metric" ? "C" : "F";
  return (
    <div className="hourly-item">
      <label className="hour">{new Date(data.dt * 1000).getHours()}:00</label>
      <img
        src={require(`../../resources/icon__${weatherCode}.png`)}
        className="icon-small"
        alt=""
      />
      <label className="temp">
        {Math.round(data.temp)}°{unitSymbol}
      </label>
    </div>
  );
}
