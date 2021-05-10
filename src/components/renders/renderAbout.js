import React from 'react'
import { Link } from 'react-router-dom';
import Data from '../data/about.json';

const Render = () => {

    return (
        <div>
            <div className='flex flex-col text-lg p-8 min-h-screen'>
            <Link to="/" className='cursor-pointer mb-4 underline text-blue-600 hover:text-blue-800 underline visited:text-purple-600'>back to homepage</Link>
                <div className='text-4xl font-bold leading-normal mb-4'>{Data.T1}</div>
                <div className='mb-4'>{Data.P1}</div>
                <div className='mb-4'>{Data.P2}</div>
                <div className='mb-4'>{Data.P3}</div>
                <Link to="/apply-now" className='cursor-pointer bg-black text-white text-center rounded-lg mt-5 mb-10 w-full py-3 px-4'>Continue to apply</Link>
            </div>
        </div>
    )
}

export default Render

// <div>{Home.L1}</div>