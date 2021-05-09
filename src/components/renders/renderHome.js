import React from 'react'
import Home from '../data/home.json';

const Render = () => {

    var Link = 'https://www.snapchat.com/invite/M2I4MDAxMTgtMjFiMy00ZmU5LWFhZDgtMmJjNGNiM2RmOTZl/NzUyZDA1MTctZjkzMS00NTRhLWEwNTUtM2ZiMmM5Y2E1ZmI1'

    console.log(Home.H1)
    return (
        <div>
            <div>
                <div>Welcome to Irational Investors!</div>
            </div>

            <a href={Link}>Join the trading groupchat!</a>
        </div>
    )
}

export default Render
