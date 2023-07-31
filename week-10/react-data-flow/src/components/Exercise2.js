import React, { useState } from 'react'
import List from './List'
import Conversation from './Conversation'

const Exercise2 = () => {

    const [appData, setAppData] = useState({
        displayConversation: null,
        conversations: [
            {
                with: "Laura", convo: [
                    { text: "Hi", sender: "self" },
                    { text: "You there?", sender: "self" },
                    { text: "Yeah, hi, what's up?", sender: "other" }
                ]
            },
            {
                with: "Dad", convo: [
                    { text: "Have you finished your school work yet?", sender: "other" },
                    { text: "Yes.", sender: "self" },
                    { text: "What do you mean, yes?", sender: "other" },
                    { text: "??", sender: "self" }
                ]
            },
            {
                with: "Shoobert", convo: [
                    { text: "Shoobert!!!", sender: "self" },
                    { text: "Dude!!!!!!!!", sender: "other" },
                    { text: "Shooooooooo BERT!", sender: "self" },
                    { text: "You're my best friend", sender: "other" },
                    { text: "No, *you're* my best friend", sender: "self" },
                ]
            }
        ]
    })

    const displayConvo = (name) => {
        const appDataTemp = {...appData}
        appDataTemp.displayConversation = name
        setAppData(appDataTemp)
    }
    const backButton = (name) => {
        const appDataTemp = {...appData}
        appDataTemp.displayConversation = null
        setAppData(appDataTemp)
    }

    // const shiftImageForward = () => {
    //     if (library.currentImg == library.images.length-1) {
    //         return
    //     }
    //     const libraryTemp = {...library}
    //     libraryTemp.currentImg++
    //     setLibrary(libraryTemp)
    // }

    return (appData.displayConversation === null ? 
    <List contacts={appData.conversations.map( c => c.with)} displayConvo={displayConvo}/> 
    : appData.conversations.filter(c => c.with == appData.displayConversation).map(c => <Conversation sender={c.with} convo={c.convo} backButton={backButton}/>))
}

export default Exercise2