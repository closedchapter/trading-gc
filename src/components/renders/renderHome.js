import React from 'react'
import { Link } from 'react-router-dom';
import Data from '../data/home.json';

const Render = () => {

    var Add = 'https://www.snapchat.com/add/irish_voxel'

    return (
        <div>
            <div className='flex flex-col text-lg p-8 min-h-screen'>
                <div className='text-4xl font-bold leading-normal mb-4'>🚀🚀🚀🚀🚀🚀🚀🚀</div>
                <div className='text-4xl font-bold leading-normal mb-4'>{Data.T1}</div>
                <div className='mb-4'>{Data.P1}</div>
                <div className='mb-4'>{Data.L1} or <Link to="/about-us" className='cursor-pointer mb-4 underline text-blue-600 hover:text-blue-800 underline visited:text-purple-600'>read about our selection process</Link></div>
                <Link to="/apply-now" className='cursor-pointer bg-black text-white text-center rounded-lg mt-5 mb-10 w-full py-3 px-4'>Join the waitlist!</Link>
                <img src={require('../media/meme.jpg').default} alt='meme' className='w-full object-cover mb-10'/>
                <div className='mb-4'>{Data.P2}</div>
                <div className='mb-4'>{Data.H1}</div>
                <a href={Add} className='mt-12 text-base text-gray-400 whitespace-pre-wrap leading-relax'>{Data.Credit}</a>
            </div>
        </div>
    )
}

export default Render