import React from 'react'

const Contact =({contact, displayConvo})=>{
    return (<div className='contact' onClick={() => displayConvo(contact)}>{contact}</div>)
}

export default Contact
