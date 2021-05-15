import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { db } from "../../firebase";

const CreatePost = () => {

    const [author, setAuthor] = useState('');
    const [message, setMessage] = useState('');
    // const [direction, setDirection] = useState('');
    const [status, setStatus] = useState('Publish');

    const data = {
        // direction: direction,
        message: message, 
        author: author,
        uid: new Date().getTime()
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        
        setStatus('Submitting');
        
        db.collection("posts")
        .doc(data.uid.toString())
        .set(data)
        .then(() => {
            console.log("A new post has been published", "Success");
            window.location('./')
          })
          .catch(error => {
            console.log(error.message, "Publish post failed");
          });
      };

    return (
        <form onSubmit={handleSubmit}>

            <div className='mb-8'> 
                <label>Type in here</label>
                <div className="w-full">
                    <input type="text" value={message} onChange={e => setMessage(e.target.value)} required placeholder="..."
                        className="border py-3 px-4 bg-white rounded-lg placeholder-gray-400 text-gray-900 appearance-none inline-block w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <div className='text-sm text-gray-500 leading-normal'>Keep it short.</div>
                </div>
            </div>

            <div className='mb-8'> 
                <label>Enter your snapchat username</label>
                <div className="w-full">
                    <input type="text" value={author} onChange={e => setAuthor(e.target.value)} required placeholder="..."
                        className="border py-3 px-4 bg-white rounded-lg placeholder-gray-400 text-gray-900 appearance-none inline-block w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <div className='text-sm text-gray-500 leading-normal'>Your username will be visible on your post.</div>
                </div>
            </div>


            <button className='font-semibold cursor-pointer bg-black text-white text-center rounded-lg mt-5 mb-10 w-full py-3 px-4'>{status}</button>
        </form>
    )
  }

const Render = () => {

    return (
        <div className='p-8 text-lg font-medium'>
            <div className='mb-8'><Link to="/" className='cursor-pointer underline text-blue-600 hover:text-blue-800 underline visited:text-purple-600'>back to homepage</Link></div>
            <div className='mb-8 text-4xl font-bold'>Create your own post</div>
            <CreatePost />
        </div>
    )
}

export default Render