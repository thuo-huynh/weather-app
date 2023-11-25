import axios from "axios";
import { EmptyLocationModel, LocationModel } from "../models";
import { useErrorHandler } from "react-error-boundary";
import { useCallback, useEffect, useState } from "react";

export const useLocation = (locationName: string, useMockData: boolean) => {
  const apiKey = process.env.REACT_APP_GEOLOCATION_API_KEY;
  const geoCodeBaseUrl = process.env.REACT_APP_GEOLOCATION_GEOCODE_BASEURL;

  const [location, setLocation] = useState<LocationModel>(EmptyLocationModel);
  const handleError = useErrorHandler();

  const getLocationDetails = useCallback(
    (position: GeolocationPosition) => {
      axios
        .get(
          useMockData
            ? "./mock-data/locality.json"
            : `${geoCodeBaseUrl}?latlng=${position.coords.latitude},${position.coords.longitude}&result_type=locality&key=${apiKey}`,
        )
        .then((res: any) => {
          if (res.data && res.data.results[0]) {
            const formattedAddress =
              res.data.results[0].formatted_address.split(",");
            setLocation({
              locality: formattedAddress[0].replace(/\s/g, ""),
              country: formattedAddress[1].replace(/\s/g, ""),
              position: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              },
            });
          }
        })
        .catch((error) => {
          handleError(error);
        });
    },
    [apiKey, geoCodeBaseUrl, handleError, useMockData],
  );

  const getCoordsByLocationName = useCallback(
    (locationName: string) => {
      axios
        .get(
          useMockData
            ? "./mock-data/latlong.json"
            : `${geoCodeBaseUrl}?address=${locationName}&key=${apiKey}`,
        )
        .then((res: any) => {
          if (res.data && res.data.results[0]) {
            const location = res.data.results[0].geometry.location;
            const formattedAddress =
              res.data.results[0].formatted_address.split(",");
            setLocation({
              position: {
                latitude: location.lat,
                longitude: location.lng,
              },
              locality: formattedAddress[0].replace(/\s/g, ""),
              country: formattedAddress[1].replace(/\s/g, ""),
            });
          }
        })
        .catch((error) => {
          handleError(error);
        });
    },
    [apiKey, geoCodeBaseUrl, handleError, useMockData],
  );

  useEffect(() => {
    if (locationName === "") {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos: GeolocationPosition) => {
            getLocationDetails(pos);
          },
          () => {
            handleError({
              message:
                "Location - Please enable access location in the browser",
            });
          },
        );
      }
    } else {
      getCoordsByLocationName(locationName);
    }
  }, [getCoordsByLocationName, getLocationDetails, handleError, locationName]);

  return { location };
};
