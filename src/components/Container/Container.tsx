import { useEffect, useState } from "react";
import { EmptyCurrentWeather, SettingsModel } from "../../models";
import Loading from "../Common/Loading/Loading";
import MockData from "../Common/MockData/MockData";
import { useWeather } from "../../hooks/useWeather";
import { Header } from "../Header/Header";
import "./Container.scss";
type ContainerProps = {
  settings: SettingsModel;
  changeSettings: (newSettings: object) => void;
};

export const Container = ({ settings, changeSettings }: ContainerProps) => {
  const useMockData: boolean = true;
  const isLoading: boolean = false;
  const [currentWeatherSelectedItem, setCurrentWeatherSelectedItem] =
    useState(EmptyCurrentWeather);
  const [currentLocationName, setCurrentLocationName] = useState<string>("");
  const { location } = useWeather(
    currentLocationName,
    settings.unit,
    useMockData,
  );
  const changeLocationHandler = (location: string) => {
    setCurrentLocationName(location);
  };

  return (
    <MockData useMockData={useMockData}>
      <div className="container">
        <Loading isLoading={isLoading}>
          <div className="grid-container">
            <Header
              locality={location.locality}
              country={location.country}
              data={currentWeatherSelectedItem}
              changeLocation={changeLocationHandler}
              settings={settings}
              changeSettings={changeSettings}
            ></Header>
          </div>
        </Loading>
      </div>
    </MockData>
  );
};
