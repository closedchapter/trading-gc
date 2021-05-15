import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';

const RenderModal = () => {
    const [open, setOpen] = useState(false);
    const drop = useRef(null);

    const handleClick = (e) => {
        if (open && !e.target.closest(`${drop.current.className}`)) {
          setOpen(false);
        }
      }

    const Modal = () => {
            return (
                <div className='fixed bg-white border p-5'>
                    <div className=''></div>
                </div>
            );
    }

    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => {
          document.removeEventListener("click", handleClick);
        };
    });


    return(
        <div ref={drop} className='flex'>
            <button onClick={() => setOpen(open => !open)}><svg class="w-8 h-8 my-auto mx-2 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 12h16M4 18h7"></path></svg></button>
            {open && <Modal />}
        </div>
    );
}

const Render = () => {

    return (
        <div className='relative'>
            <div className='ring-1 ring-gray-300 bg-white fixed w-full inline-flex justify-end py-3 px-2'>
                <RenderModal />
                <div className='items-start mr-auto font-bold text-xl my-auto'>Investors</div>
                <Link to="/create" className='mx-3 items-start cursor-pointer bg-indigo-600 hover:bg-indigo-800 text-white font-semibold text-center rounded px-4 py-2'>Create</Link>
            </div>
            <div className='h-16'></div>
        </div>
    )
}

export default Render
