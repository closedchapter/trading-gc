import React from "react";
import { Link } from 'react-router-dom';
// import { db } from "../../firebase";
import Data from '../data/home.json';

/* const RenderCards = () => {
    db.collection('analysis').get({
        asset:asset,
        author:author,
        message:message,
    })
}*/

const Render = () => {

    var Add = 'https://www.snafpchat.com/add/irish_voxel'

    return (
            <div className='flex flex-col text-lg p-8 min-h-screen md:w-1/2 md:mx-auto'>
                <div className='text-4xl font-bold leading-normal mb-4 md:text-center'>🚀🚀🚀🚀🚀🚀🚀🚀</div>
                <div className='text-4xl font-bold leading-normal mb-4'>{Data.T1}</div>
                <div className='mb-4'>{Data.P1}</div>
                <div className='mb-4'>{Data.L1} or <Link to="/about-us" className='cursor-pointer mb-4 underline text-blue-600 hover:text-blue-800 underline visited:text-purple-600'>read about our selection process</Link></div>
                <Link to="/apply-now" className='cursor-pointer bg-black text-white text-center rounded-lg mt-5 mb-10 w-full py-3 px-4'>Join the waitlist!</Link>
                <img src={require('../media/meme.jpg').default} alt='meme' className='w-full object-cover mb-10'/>
                <div className='mb-4'>{Data.P2}</div>
                <div className='mb-4'>{Data.H1}</div> 
                <a href={Add} className='mt-12 text-base text-gray-400 whitespace-pre-wrap leading-relax'>{Data.Credit}</a>
            </div>
    )
}

export default Render



/*<div className='text-3xl font-bold leading-normal mb-4'>group analysis</div>

<div className='overflow-x-auto -mx-8 px-8'>
<div className='flex mb-4 bg-white w-max py-4 px-8 -mx-8 space-x-6'>
        <div className='flex flex-col shadow p-4 bg-white rounded-lg w-72'>
            <div className='flex items-center'>
                <div className='font-bold mb-4'>Dogecoin</div>
                <div className='font-bold mb-4 mx-4 text-base bg-green-200 rounded px-2 text-green-500'>BULLISH</div>
                <div className='font-bold mb-4 ml-auto'>📈</div>
            </div>
            <div className='mb-4 text-base'>A Goldman Sachs executive just quit after making millions from Dogecoin. This is bullish because the media reports it and brings awareness.</div>
            <p className='text-base text-gray-400 leading-relax mt-auto'>analysis by @irish_voxel</p>
        </div>

        <div className='flex flex-col shadow p-4 bg-white rounded-lg w-72'>
            <div className='flex items-center'>
                <div className='font-bold mb-4'>Crypto</div>
                <div className='font-bold mb-4 mx-4 text-base bg-red-200 rounded px-2 text-red-500'>BEARISH</div>
                <div className='font-bold mb-4 ml-auto'>📉</div>
            </div>
            <div className='mb-4 text-base'>The resurgence of random altcoins exploding in value is a sure sign that market-crash is imminent.</div>
            <p className='text-base text-gray-400 leading-relax mt-auto'>analysis by @drewrostron</p>
        </div>
    </div>   
</div>   */