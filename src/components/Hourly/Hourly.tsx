import { useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import {
  CurrentWeatherModel,
  HourlyWeatherModel,
  SettingsModel,
} from "../../models";
import HourlyItem from "../HourlyItem/HourlyItem";
import "./Hourly.scss";

interface HourlyProps {
  settings: SettingsModel;
  data: HourlyWeatherModel;
  clickHandler: (data: CurrentWeatherModel) => void;
}

export const Hourly = ({ settings, data, clickHandler }: HourlyProps) => {
  const [activeIndex, setActiveIndex] = useState(
    data && data.hourly[0] ? data.hourly[0].dt : 0,
  );
  const onClickHandler = (hour: CurrentWeatherModel) => {
    setActiveIndex(hour.dt);
    clickHandler(hour);
  };
  return (
    <div className="hourly">
      <label className="title">Hourly</label>
      <div className="hourly-items-container">
        <ScrollContainer>
          {data.hourly.map((hour) => (
            <div
              key={hour.dt}
              className={
                hour.dt === activeIndex ? "hourly-item active" : "hourly-item"
              }
              onClick={() => onClickHandler(hour)}
            >
              <HourlyItem data={hour} settings={settings}></HourlyItem>
            </div>
          ))}
        </ScrollContainer>
      </div>
    </div>
  );
};
