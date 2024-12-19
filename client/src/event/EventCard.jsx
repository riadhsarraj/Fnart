// EventCard.js
import React from 'react';
import event from "./event.module.css";
const EventCard = ({ Title, Date, description, handleClick  }) => {
  console.log(Title)
  return (
    
    <div className={event.card}>
      <p className={event.heading}>{Title}</p>
      <p className={event.para}>{Date}</p>
      <div className={event.overlay}>
        
        <br />
        
      </div>
      <button className={event.btn} onClick={handleClick}>PLUS D'INFORMATION</button>
    </div>
  );
};

export default EventCard;
