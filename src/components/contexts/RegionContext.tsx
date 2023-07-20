import { isEmpty } from "ramda";
import { createContext, useContext, useState } from "react";
import { useQuery } from "react-query";
import { getAddressByGeolocation } from "../../utils";


interface RegionProps {
  data: geoLocation;
  isLoading: boolean;
  error: unknown;
}

const RegionContext = createContext<Partial<RegionProps>>({} as RegionProps)

export const RegionContextProvider = ({children}: any) => {
  const [coords, setCoords] = useState({
    lat: 0,
    long: 0,
    isLoaded: false,
  });

    const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos: GeolocationPosition) {
    const coordinates = pos.coords;

    if(!coordinates){
      return console.warn('no coordinates passed')
    }

    if(!coords.isLoaded){
      setCoords({
        lat: coordinates.latitude,
        long: coordinates.longitude,
        isLoaded: true
      })
    }
  }
  function geoError(err: GeolocationPositionError) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, geoError, options);


  const { data, isLoading, error } = useQuery<geoLocation>(["getAddressByGeo"], () =>
    getAddressByGeolocation(coords.lat, coords.long));


  return (
 <RegionContext.Provider value={{data, isLoading, error}}>
      {children}
 </RegionContext.Provider>
  )
}

export const useRegionContext = () => {
  const context = useContext(RegionContext)

  if(isEmpty(RegionContext)){
    throw new Error("useRegionContext must be wrapped inside and region context")
  }

  return context
}
