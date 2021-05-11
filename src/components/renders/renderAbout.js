import React from 'react'
import { Link } from 'react-router-dom';
import Data from '../data/about.json';

const Render = () => {

    return (
        <div>
            <div className='flex flex-col text-lg p-8 min-h-screen'>
                <div className='text-4xl font-bold leading-normal mb-4'>{Data.T1}</div>
                <img src={require('../media/selection.gif').default} alt='meme' className='w-full object-cover my-4'/>
                <div className='my-4'>{Data.P1}</div>
                <div className='my-4'>{Data.P2}</div>
                <div className='my-4'>{Data.P3}</div>
                <Link to="/" className='cursor-pointer bg-black text-white text-center rounded-lg mt-5 mb-10 w-full py-3 px-4'>Continue</Link>
            </div>
        </div>
    )
}

export default Render

// <div>{Home.L1}</div>