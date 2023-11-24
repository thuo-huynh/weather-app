import { useEffect, useState } from "react";
import { defaultSettings, SettingsModel } from "../models";
export const useSettings = () => {
  const [settings, setSettings] = useState<SettingsModel>(defaultSettings);
  useEffect(() => {
    const savedSettings = localStorage.getItem("settings");
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    } else {
      setSettings(defaultSettings);
    }
  }, []);
  const changeSettings = (newSettings: object) => {
    setSettings({ ...settings, ...newSettings });
    localStorage.setItem(
      "settings",
      JSON.stringify({ ...settings, ...newSettings })
    );
  };

  return {
    settings,
    changeSettings,
  };
};
