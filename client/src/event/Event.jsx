import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import event from './event.module.css';
import EventCard from './EventCard';
import { useNavigate } from "react-router-dom";

const Event = () => {
  const [events, setEvents] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await Axios.get('http://localhost:3001/allEvents');
        setEvents(response.data.data);
      } catch (error) {
        console.error('Error fetching events', error);
      }
    };

    fetchEvents();
  }, []);

  const rediriger = (Linke) => {
    nav("/event2", {
      state: { Linke },
    });
  };

  return (
    <div className={event.bod}>
      <div>
        <div className={event.image}></div>
        <div className={event.ss}>Nos événements de camping et de randonnée</div>
      </div>
      <div className={event.cont}>
        <div className={event.l}>
          {events.map(event => (
            <EventCard
              key={event._id}
              Title={event.Title}
              Date={event.Date}
              description={event.description}
              handleClick={() => rediriger(event.Link)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
