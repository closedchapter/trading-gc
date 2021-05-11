import React from "react";
import { Link, useHistory } from 'react-router-dom';

const Render = () => {
    const history = useHistory();

    return (
        <div>
            <div className='flex flex-col justify-start text-lg p-8 min-h'>
                <div className='text-4xl font-bold leading-normal mb-4'>thanks for joining!</div>
                <div className='mb-4'>After your application is reviewed you will receive an email at <b>{history.location.state.email}</b> with an invite link which you can use to join the groupchat.</div>
                <div className='mb-4'>Your unique ID number is <b>{history.location.state.id}</b>.</div>
                <Link to="/" className='cursor-pointer bg-black text-white text-center rounded-lg w-full py-3 px-4 mt-12 mb-4'>Continue</Link>
                <div className='mb-4 text-sm text-gray-500 leading-normal'>Due to a high number of applications we switched to an invite-only process. You can read more about <Link to="/about-us" className='cursor-pointer mb-4 underline text-blue-600 hover:text-blue-800 underline visited:text-purple-600'>our selection process here.</Link></div>
                <img src={require('../media/welcome.gif').default} alt='meme' className='w-full object-cover mt-8 mb-4'/>
            </div>
        </div>
    )
}

export default Render

//<div className='mb-4'>Due to a high number of applications we have switched to an invite-only process. <Link to="/about-us" className='cursor-pointer mb-4 underline text-blue-600 hover:text-blue-800 underline visited:text-purple-600'>You can read more about it here</Link></div>
