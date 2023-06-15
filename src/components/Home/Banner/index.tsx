import { FunctionComponent } from 'react'
import banner from '../../../assets/banners/Intro.png'

export const Banner: FunctionComponent = () => {
    return (
        <div className='banner__container w-full mw-[1440px] h-auto m-auto'>
            <img src={banner} alt="" className='m-auto'/>
        </div>
    )
}