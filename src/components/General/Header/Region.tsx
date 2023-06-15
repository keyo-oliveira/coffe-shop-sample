import React, { FunctionComponent } from "react";
import {MapPin} from '@phosphor-icons/react'


export const Region:FunctionComponent = () => {
    return(
        <button className="region__container bg-light-purple flex items-center justify-center gap-2 rounded-lg w-full h-9 p-2">
            <MapPin width={22} height= {22}  fill={'#8047F8'} />
            <span className='text-brand-purple font-bold'> Porto Alegre - RS</span>
        </button>
    )
}