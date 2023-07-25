import Spam from "./Spam";
import React, { Component } from 'react';


const Spamalot =()=>{
    const arrayOfSpam = []
    for (let i = 0; i < 500; i++) {
        arrayOfSpam.push(<Spam/>)               
    }
    return arrayOfSpam
}

export default Spamalot

