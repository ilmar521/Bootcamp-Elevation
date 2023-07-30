import React from 'react'

const PageButton =({page, handler})=>{
    return (<button onClick={() => handler(page)}>{page}</button>)
}

export default PageButton
