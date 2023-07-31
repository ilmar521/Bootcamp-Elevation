import React from 'react'

const Conversation =({sender, convo, backButton})=>{

    return (
        <div>
            <button onClick={backButton}>Back</button>
            {convo.map(c => (
                <div className={c.sender === 'self' ? 'me_sender' : ''}>
                <span className='sender'>{c.sender === 'self' ? 'Me' : c.sender}</span>: {c.text}
                </div>
            ))}
        </div>
    ) 
}


export default Conversation
