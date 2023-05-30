import React, { useState } from 'react';

const ContactCard = () => {
  const [showAge, setShowAge] = useState(false);
    return (
      <div className="contact-card">
        <img src="https://via.placeholder.com/150" alt="profile"></img>
        <div className="user-details">
          <p>Name: John Smith</p>
          <p>Email: johnsmith@reallyreallyrealemail.com</p>
          {showAge ? <p>Age: 25</p> : null}
        </div>
      </div>
    )
}

export default ContactCard;