import React, { FunctionComponent, useState } from "react";
import { MapPin } from "@phosphor-icons/react";
import { getAddressByGeolocation } from "../../../utils";
import { useQuery } from "react-query";

export const Region: FunctionComponent = () => {
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


  const { data, isLoading, error } = useQuery<any>(["getAddressByGeo"], () =>
    getAddressByGeolocation(coords.lat, coords.long)
);

  console.log( data, isLoading, error )

  return (
    <button className="region__container bg-light-purple flex items-center justify-center gap-2 rounded-lg w-full h-9 p-2">
      <MapPin width={22} height={22} fill={"#8047F8"} />
      <span className="text-brand-purple font-bold"> Porto Alegre - RS</span>
    </button>
  );
};
