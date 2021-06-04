import React from 'react'

const TrendingCoin = ({ coin }) => {
    const score = coin.score+1
    return (
            <div className='bg-white rounded-lg flex flex-col border p-6'>
                <div className='font-semibold text-lg'>{score}</div>
                <img className='w-8 my-4' src={coin.large} alt='logo'/>
                <div className='font-semibold text-lg'>{coin.name}</div>
            </div>
    )
}

const TrendingCoinList = ({ TrendingJSON }) => {
    var arrTrending = []
    TrendingJSON.forEach((coin) => {
        arrTrending.push(<TrendingCoin coin={coin} key={coin.id}/>)
    })
    return (
        <div>
            <div className='mb-6 border-b pb-8'>
                <div className='font-bold text-xl'>Trending Coins🔥</div>
                <div className='font-medium text-base leading-relaxed'>A list of the most searched for crypto-coins in the past 24hrs📈👀:</div>
            </div>
            <div className='grid grid-flow-row grid-cols-2 gap-2'>
                {arrTrending}
            </div>
        </div>
    )
}

const Render = ({ TrendingJSON }) => {
    return (
        <div className='min-h-screen p-8'>
            <TrendingCoinList TrendingJSON={TrendingJSON}/>
        </div>
    )
}

export default Render