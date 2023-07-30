import React from 'react'

const Item =({item, price, shouldDiscount, discount})=>{
    return (<div>{item}: ${shouldDiscount ? price * (1 - discount) : price}</div>)
}

export default Item
