import { useEffect, useState } from "react";
import { lookupCountry } from "./lookupCountry";

export const useCurrentLocation = () => {
  const [error, setError] = useState("");
  const [location, setLocation] = useState<any>([]);


  const handleSucess = (position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords;

    setLocation({
      latitude,
      longitude,
    });
  };

  const handleError = (error: GeolocationPositionError) => {
    setError(error.message);
    console.log(error.message);
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
    }
    navigator.geolocation.getCurrentPosition(handleSucess, handleError);
  }, []);

  return { location, error };
};



