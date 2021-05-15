import React, { useState, useEffect, useRef } from "react";
import { db } from "../../firebase";

const DropDown = () => {
    const [open, setOpen] = useState(false);
    const drop = useRef(null);

    const handleClick = (e) => {
        if (open && !e.target.closest(`${drop.current.className}`)) {
          setOpen(false);
        }
      }

    const Modal = () => {
            return (
                <div className={'bg-green-400 p-5'}></div>
            );
    }

    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => {
          document.removeEventListener("click", handleClick);
        };
    });

    return(
        <div ref={drop} className='dropdown'>
            <button className='ml-auto hover:text-black hover:bg-gray-100 rounded px-3 -mr-2' onClick={() => setOpen(open => !open)}><svg class="w-6 h-6 my-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg></button>
            {open && <Modal setOpen={open} ref={drop}/>}
        </div>
    );
}

const Render = () => {

    const [data, setData] = useState();

    useEffect(() => {
        db.collection("posts")
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            setData(data);
        });
    }, []);

    const item = data?.map((data) =>
        <div key={data.uid} className='bg-white rounded-2xl ring-1 ring-gray-300 py-2 px-4 mb-4'>
            <div className='inline-flex text-gray-400 w-full'>
                <div className='my-2 text-base'>@{data.author}</div>
                <DropDown />
            </div>
            <div className='my-2'>{data.message}</div>
        </div>
    );

    return (
        <div className='p-4 text-lg font-medium leading-relax h-screen'>

            <div className='bg-gradient-to-tl from-purple-700 via-pink-500 to-red-500 p-4 -m-4 text-white pt-12 mb-4'>
                <div className='font-bold text-3xl'>Trending🔥</div>
                <div className='font-bold text-base mb-10'>Just in from our analysts</div>
            </div>

            <div className='rounded-3xl bg-white -m-4 -my-10 p-4 pt-8'>{item}</div>
        </div>
    );
}

export default Render



/* <div className='bg-gray-100'>
<div className='border bg-white p-2 border-gray-300 leading-normal text-lg font-medium'>
    <div className='mb-2 font-bold text-xl'></div>
    <div className='mb-2'>A Goldman Sachs executive just quit after making millions from Dogecoin. This is bullish because the media reports it and brings awareness.</div>
    <div className='mb-2 text-base text-gray-400 leading-relax'>analysis by @irish_voxel</div>
</div>
<Link to="/apply-now" className='cursor-pointer bg-black text-white text-center rounded-lg mt-5 mb-10 w-full py-3 px-4'>Publish my analysis</Link>
</div>




*/