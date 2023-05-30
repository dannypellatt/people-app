import React from 'react';
import './App.css';
import ContactCard from './ContactCard';

const App = () => {
  const contacts = [
    {
      avatarUrl: "https://via.placeholder.com/150",
      name: "Jenny Han",
      email: "notreasl@notreasl.com",
      age: 25
    },
    {
      avatarUrl: "https://via.placeholder.com/150",
      name: "Jenny bloo",
      email: "notreasgsl@notreasl.com",
      age: 35
    },
    {
      avatarUrl: "https://via.placeholder.com/150",
      name: "Jim Him",
      email: "not@notreasl.com",
      age: 99
    },
    {
      avatarUrl: "https://via.placeholder.com/150",
      name: "Per Son",
      email: "hiemail@notreasl.com",
      age: 206
    }
  ];
  return(
    <div>
      {contacts.map((contact, index) => {
        return(
          <ContactCard 
            key={index}
            avatarUrl = {contact.avatarUrl}
            name = {contact.name}
            email = {contact.email}
            age = {contact.age}
          />
        )
      })}
    </div>
    
  )
}

export default App;