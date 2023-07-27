import React, { useState } from 'react'

const Hudini =()=>{
    
    let [show, setShow] = useState(false)

    const changeShow = function () {
        setShow(!show)
    }

    return (<div>
                {show ? <div>Now you see me</div> : <div>Now you don’t</div>}
                <button onClick={changeShow}>Change Hudini</button>
            </div>
        )
}

export default Hudini
