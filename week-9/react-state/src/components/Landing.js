import React from 'react'

const Landing =({storeData})=>{
    const hottestItem = storeData.store.filter(i => i.hottest)

    return (<div>Welcome, {storeData.user}. The hottest item is {hottestItem[0].item} for ${hottestItem[0].price}</div>)
}

export default Landing
