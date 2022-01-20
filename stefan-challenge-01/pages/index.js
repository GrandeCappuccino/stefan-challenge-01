import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ListItem from './components/ListItem'
import { useState } from 'react'
// import ListItem from './ListItem.css'

export default function Home() {

  const contacts = [
    {name:'edwin', id:1}, 
    {name:'stefan', id:2}, 
    {name:'matt', id:3}, 
    ];
  
  const [contactList, setContactList] = useState(contacts);



  const handleClick = (id) => {

    setContactList( contactList.filter((contact) => {

      return (id !== contact.id );

    }))
}


  return (
    <div>
    <ul>
    {contactList.map( contact => 
      
        
          <li key={contact.id}>
            <p> {contact.name}</p> 
            <button onClick={() => handleClick(contact.id)}> 🗑 </button>
          </li>
       
      
    )} 
    </ul>
    </div>
  )
}
