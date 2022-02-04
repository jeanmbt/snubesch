import { useEffect, useState } from "react";
import { lookupCountry } from "./lookupCountry";

export const useCurrentLocation = () => {
  const [country, setCountry] = useState();
  const [error, setError] = useState("");

  async function handleNavigator(position: GeolocationPosition) {
    const { latitude, longitude } = position.coords;

    const userCountryCode = await lookupCountry({ latitude, longitude });

    setCountry(userCountryCode);
  }

  const handleError = (error: GeolocationPositionError) => {
    setError(error.message);
    console.log(error.message);
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
    }

    navigator.geolocation.getCurrentPosition(handleNavigator, handleError);
  }, []);

  return {country, setCountry}
};



