import React from 'react'
import Item from './Item'

const Home =({storeData})=>{
    return (<div>
                <h4>Store</h4>
                {storeData.store.map(i => <Item item={i.item} price={i.price} shouldDiscount={storeData.shouldDiscount} discount={i.discount}/>)}
            </div>)
}

export default Home
