import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { db } from "../../firebase";
//import Data from '../data/apply.json';

const Input = () => {

    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('Submit');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setStatus('Sending');

        axios.post("localhost:5000/apply-now/sucess", email)

    }

    return (
        <form onSubmit={handleSubmit} method='POST'>
            <div className='flex flex-col'>
                <label htmlFor="email">
                    Enter your email
                </label>
                <div className="w-full mb-10 my-3">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        className="border py-3 px-4 bg-white rounded-lg placeholder-gray-400 text-gray-900 appearance-none inline-block w-full  focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="john@example.com"
                    />
                    <div className='text-sm text-gray-500 leading-normal my-3'>Your invitation link will be sent to this email address.</div>
                </div>
                <button className='cursor-pointer bg-black text-white text-center rounded-lg mt-5 mb-10 w-full py-3 px-4'>{status}</button>
            </div>
        </form>
    )
  }

const Render = () => {

    return (
        <div>
            <div className='flex flex-col text-lg p-8 min-h-screen'>
            <Link to="/" className='cursor-pointer mb-4 underline text-blue-600 hover:text-blue-800 underline visited:text-purple-600'>back to homepage</Link>
                <div className='text-4xl font-bold leading-normal mb-4'>tell us about you</div>
                <div className='mb-4'></div>
                <Input />
            </div>
        </div>
    )
}

export default Render

//<div className='mb-4'>Due to a high number of applications we have switched to an invite-only process. <Link to="/about-us" className='cursor-pointer mb-4 underline text-blue-600 hover:text-blue-800 underline visited:text-purple-600'>You can read more about it here</Link></div>