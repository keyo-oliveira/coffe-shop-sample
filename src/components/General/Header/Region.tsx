import React, { FunctionComponent, useState } from "react";
import { MapPin } from "@phosphor-icons/react";
import { getAddressByGeolocation } from "../../../utils";
import { useQuery } from "react-query";
import { useRegionContext } from "../../contexts/RegionContext";

export const Region: FunctionComponent = () => {
  const {data} = useRegionContext()

  if(!data ) return null

  const features = data.features

  const [{properties}] = features


  return (
    <button className="region__container bg-light-purple flex items-center justify-center gap-2 rounded-lg w-full h-9 p-2">
      <MapPin width={22} height={22} fill={"#8047F8"} />
      <span className="text-brand-purple font-bold"> {properties.city} - {properties.county}</span>
    </button>
  );
};
