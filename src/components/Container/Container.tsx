import { SettingsModel } from "../../models";
import Loading from "../Common/Loading/Loading";
import MockData from "../Common/MockData/MockData";

type ContainerProps = {
  settings: SettingsModel;
  changeSettings: (newSettings: object) => void;
};

export const Container = ({ settings, changeSettings }: ContainerProps) => {
  const useMockData: boolean = true;
  const isLoading: boolean = true;
  return (
    <MockData useMockData={useMockData}>
      <div className="container">
        <Loading isLoading={isLoading}>
          <div className="grid-container"></div>
        </Loading>
      </div>
    </MockData>
  );
};
