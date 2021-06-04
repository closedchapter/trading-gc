import React from 'react';
const GenerateTrendingJSON = () => {
  const arrTrending = []
  const [objTrending, storeTrending] = React.useState('')
  React.useEffect(() => {
      const cURL = 'https://api.coingecko.com/api/'
      fetch(`${cURL}v3/search/trending`)
          .then(response => response.json())
          .then(json => storeTrending(json.coins))
  },[])

  arrTrending.push(Object.values(objTrending))
  arrTrending[0].forEach((coin) => {
    arrTrending.push(coin.item)
  })
  arrTrending.shift()
  return arrTrending
}

export default GenerateTrendingJSON