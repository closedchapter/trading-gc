import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { db } from "../../firebase";
//import Data from '../data/apply.json';

const Form = () => {
    
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('Submit');


    function getRandomString(length) {
        var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var result = '';
        for ( var i = 0; i < length; i++ ) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        return result;
    }

    const fetchUniqueID = () => {
        const decimal = (Date.now() / 1000);
        const removedDecimal = Math.trunc(decimal);
        const multiplyDecimal = Math.trunc(((decimal - removedDecimal) * 1000))
        const hexString = multiplyDecimal.toString(16);
        const randomChars = getRandomString(3);
        const result = ('#'+hexString+''+multiplyDecimal+''+randomChars+'')
        return (result)
    }

    const unique_id = (() => { return(fetchUniqueID());})()

    const location = {
        pathname: '/success',
        state: { applyAuth: true, id:unique_id, email:email }
      }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        
        setStatus('Sending');
        
        db.collection('applicants').add({
            email:email,
            message:message,
            unique_id:unique_id
        })
        .then(() => {
            console.log({email, message, unique_id})
            console.log('Application details were successfully sent.')
            history.push(location)
        })
        .catch((error) => {
            setStatus('Error!');
            console.log(error.message)
        });
        setEmail('')
        setMessage('')
        setStatus('Submit')
        console.log('Input fields were successfully wiped.')
    };

    return (
        <form onSubmit={handleSubmit} method='POST'>
            <div className='flex flex-col my-4'>

            <div className='my-1 mb-12'>
                    <label htmlFor="trade-type">
                        What type of trading are you interested in? 🤔💭
                    </label>
                    <div className="w-full my-1">
                        <input
                            type="text"
                            name="trade-type"
                            id="trade-type"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            required
                            className="border py-3 px-4 bg-white rounded-lg placeholder-gray-400 text-gray-900 appearance-none inline-block w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="I am interested in stocks"
                        />
                        <div className='text-sm text-gray-500 leading-normal my-1'>We accept all types of investors & traders.</div>
                    </div>
                </div>

                <div className='my-1 mb-12'>
                    <label htmlFor="email">
                        Enter your snapchat username🤳
                    </label>
                    <div className="w-full my-1">
                        <input
                            type="text"
                            name="email"
                            id="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                            className="border py-3 px-4 bg-white rounded-lg placeholder-gray-400 text-gray-900 appearance-none inline-block w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="@jane_doe247"
                        />
                        <div className='text-sm text-gray-500 leading-normal my-1'>Your invitation link will be sent to your snapchat.</div>
                    </div>
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
            <Link to="/" className='cursor-pointer my-2 underline text-blue-600 hover:text-blue-800 underline visited:text-purple-600'>back to homepage</Link>
                <div className='text-4xl font-bold leading-normal my-4'>tell us about you😄</div>
                <Form />
            </div>
        </div>
    )
}

export default Render

//<div className='mb-4'>Due to a high number of applications we have switched to an invite-only process. <Link to="/about-us" className='cursor-pointer mb-4 underline text-blue-600 hover:text-blue-800 underline visited:text-purple-600'>You can read more about it here</Link></div>