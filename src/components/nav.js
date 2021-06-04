import React from "react";
import {ReactComponent as NavSVG} from './svg/nav.svg';

const Render = () => {
    return (
        <div className='relative h-16'>
            <div className='h-16 fixed border-b bg-white flex items-center w-full px-8'>
                <NavSVG />
                <div className='text-base font-bold whitespace-pre leading-3 '>{"Irrational\nInvestors"}</div>
            </div>
        </div>
    )
}

export default Render

