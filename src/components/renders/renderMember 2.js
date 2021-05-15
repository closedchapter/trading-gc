import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { db } from "../../firebase";

const Form = () => {
    
    const history = useHistory();

    const [author, setAuthor] = useState('');
    const [direction, setDirection] = useState('');
    const [message, setMessage] = useState('');
    const [asset, setAsset] = useState('');
    const [status, setStatus] = useState('Submit');

    const location = {
        pathname: '/member-success',
        state: { submitAuth: true, author:author, direction:direction, asset:asset }
      }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        
        setStatus('Sending');
        
        db.collection('member-analysis').add({
            asset:asset,
            author:author,
            message:message,
            direction:direction
        })
        .then(() => {
            console.log({asset, author, direction, message})
            console.log('Submission details were successfully sent.')
            history.push(location)
        })
        .catch((error) => {
            setStatus('Error!');
            console.log(error.message)
        });
        setAsset('')
        setAuthor('')
        setMessage('')
        setDirection('')
        setStatus('Submit')
        console.log('Input fields were successfully wiped.')
    };

    return (
        <form onSubmit={handleSubmit} method='POST'>
            <div className='flex flex-col my-4'>

            <div className='my-1 mb-8'>
                    <label htmlFor="asset">
                        What is the name of the asset you are submitting?
                    </label>
                    <div className="w-full my-1">
                        <input
                            type="text"
                            name="asset"
                            id="asset"
                            value={asset}
                            onChange={e => setAsset(e.target.value)}
                            required
                            className="border py-3 px-4 bg-white rounded-lg placeholder-gray-400 text-gray-900 appearance-none inline-block w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="e.g 'GME' or 'Dogecoin'"
                        />
                        <div className='text-sm text-gray-500 leading-normal my-1'>If you are not talking about a specific coin or stock - you can use 'Crypto' or 'Stock' instead.</div>
                    </div>
                </div>

                <div class="my-1 mb-8">
                    <span class="text-gray-700">What is the general direction of your asset?</span>
                    <div class="mt-2 flex">
                        
                        <label class="inline-flex items-center">
                        <input 
                            type="radio" 
                            class="appearance-none bg-white p-2 border rounded-full checked:bg-indigo-600 checked:border-white" 
                            name="direction" 
                            value="bullish"/>
                        <span class="ml-2 font-bold mx-4 text-base bg-green-200 rounded px-2 text-green-500">BULLISH</span>
                        </label>

                        <label class="inline-flex items-center mx-auto">
                        <input 
                            type="radio" 
                            class="appearance-none bg-white p-2 border rounded-full checked:bg-indigo-600 checked:border-white" 
                            name="direction" 
                            value="bearish"/>
                        <span class="ml-2 font-bold mx-4 text-base bg-red-200 rounded px-2 text-red-500">BEARISH</span>
                        </label>
                    </div>
                </div>

                <div className='my-1 mb-8'>
                    <label htmlFor="author">
                        Enter your snapchat username🤳
                    </label>
                    <div className="w-full my-1">
                        <input
                            type="text"
                            name="author"
                            id="author"
                            value={author}
                            onChange={e => setAuthor(e.target.value)}
                            required
                            className="border py-3 px-4 bg-white rounded-lg placeholder-gray-400 text-gray-900 appearance-none inline-block w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="jane_doe247"
                        />
                        <div className='text-sm text-gray-500 leading-normal my-1'>Your snapchat name will appear in your analysis.</div>
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
            <div className='flex flex-col text-lg p-8 min-h-screen md:w-1/2 mx-auto'>
            <Link to="/" className='cursor-pointer my-2 underline text-blue-600 hover:text-blue-800 underline visited:text-purple-600'>back to homepage</Link>
                <div className='text-4xl font-bold leading-normal my-4'>member submission</div>
                <Form />
            </div>
        </div>
    )
}

export default Render