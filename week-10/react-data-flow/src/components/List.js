import React from 'react'
import Contact from './Contact'

const List =({contacts, displayConvo})=>{

    return contacts.map( c => <Contact contact={c} displayConvo={displayConvo}/>)
}

export default List
