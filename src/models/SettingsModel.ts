export type ThemeType = "light" | "dark";
export type UnitType = "metric" | "imperial";

export interface SettingModel {
  theme: ThemeType;
  unit: UnitType;
}

export const defaultSettings: SettingModel = {
  theme: "light",
  unit: "metric",
};
