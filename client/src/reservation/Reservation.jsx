import React, { useState, useEffect } from "react";
import "./reservation.css";
import img from "../image/zzz.jpg";
import Axios from "axios";

export default function Reservation() {
  const [Fullname, setFullname] = useState("");
  const [Number, setNumber] = useState("");
  const [Cin, setCin] = useState("");
  const [Email, setEmail] = useState("");
  const [Event, setEvent] = useState("");
  const [NumberPlaces, setNumberPlaces] = useState("");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await Axios.get("http://localhost:3001/allEvents");
        setEvents(response.data.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des événements", error);
      }
    };
    fetchEvents();
  }, []);

  const createresrvation = async (e) => {
    e.preventDefault();

    try {
      // Récupérer le nombre total de places déjà réservées pour cet événement
      const response = await Axios.get(`http://localhost:3001/totalPlaces/${Event}`);
      const totalReservedPlaces = response.data.totalReservedPlaces;

      if (totalReservedPlaces + parseInt(NumberPlaces) > 50) {
        alert("Le nombre total de places réservées pour cet événement dépasse 50. Veuillez choisir un autre événement ou réduire le nombre de places.");
        return;
      }

      // Créer la réservation
      await Axios.post("http://localhost:3001/createreservation", {
        Fullname,
        Number,
        Cin,
        Email,
        Event,
        NumberPlaces
      });

      alert("Reservation created");
      window.location.replace("/reservation");
    } catch (error) {
      console.error("Erreur lors de la création de la réservation", error);
      alert("Erreur lors de la création de la réservation");
    }
  };

  return (
    <div className="res">
      <div className="card">
        <div className="row">
          <div className="col">
            <img className="img" src={img} alt="" />
          </div>
          <div className="col">
            <h2>Reservation</h2>
            <div className="ff">
              <div className="form__groupp field">
                <input
                  type="input"
                  className="form__fieldd"
                  placeholder="Name"
                  name="Fullname"
                  required=""
                  onChange={(e) => setFullname(e.target.value)}
                />
                <label htmlFor="name" className="form__labell">
                  Nom et Prénom
                </label>
              </div>

              <div className="form__groupp field">
                <input
                  type="number"
                  className="form__fieldd number"
                  placeholder="Name"
                  name="number"
                  required=""
                  onChange={(e) => setNumber(e.target.value)}
                />
                <label htmlFor="name" className="form__labell number">
                Numéro
                </label>
              </div>
            </div>
            <br />
            <div className="ff">
              <div className="form__groupp field">
                <input
                  type="number"
                  className="form__fieldd"
                  placeholder="Name"
                  name="CIN"
                  required=""
                  onChange={(e) => setCin(e.target.value)}
                />
                <label htmlFor="name" className="form__labell">
                  CIN
                </label>
              </div>
              <div className="form__groupp field">
                <input
                  type="input"
                  className="form__fieldd Email"
                  placeholder="Name"
                  name="Email"
                  required=""
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="name" className="form__labell Email">
                  Email
                </label>
              </div>
            </div>

            <br />
            <select name="pets" id="pet-select" onChange={(e) => setEvent(e.target.value)}>
              <option value="">Événement</option>
              {events.map((event) => (
                <option key={event._id} value={event.Title}>
                  {event.Title}
                </option>
              ))}
            </select>
            <br />
            <div className="a">
              <div className="form__group field">
                <input
                  type="number"
                  className="form__fieldd"
                  placeholder="Name"
                  required=""
                  onChange={(e) => setNumberPlaces(e.target.value)}
                />
                <label htmlFor="name" className="form__label">
                Nombre de places
                </label>
              </div>
            </div>
            <button className="bb" onClick={createresrvation}>confirmer</button>
          </div>
        </div>
        <div className="bg"></div>
        <div className="blob"></div>
      </div>
    </div>
  );
}
