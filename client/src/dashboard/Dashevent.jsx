import React, { useEffect, useState } from "react";
import Axios from "axios";
import dash from "./dashevent.module.css";
import Sidebar from "./Sidebar";
export default function Dashevent() {
  const [Title, setTitle] = useState("");
  const [Date, setDate] = useState("");
  const [Link, setLink] = useState("");
  const [Events, setEvents] = useState([]);
  const createEvent = async (e) => {
    e.preventDefault();
    await Axios.post("http://localhost:3001/createEvent", {
      Title: Title,
      Date: Date,
      Link: Link,
    });
    alert("Event created");
    window.location.replace("/Dashevent");
  };
  
  return (
    <div className={dash.bod}>
      <div className="">
        <Sidebar></Sidebar>
      </div>
      <div className="row">
       
      <div className="col">
        <h4 className={dash.h4}> Add Event</h4>
        <div className={dash.container}>
          <form className={dash.form}>
            <div className="row">
              <div className="col">
                <div className={dash.group}>
                  <label for="title">Title of camp</label>
                  <input
                    required=""
                    name="title"
                    id="title"
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>
              <div className="col">
                <div className={dash.group}>
                  <label for="Date">Date</label>
                  <input
                    required=""
                    name="Date"
                    id="Date"
                    type="text"
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className={dash.group}>
              <label for="link">Location link</label>
              <input
                required=""
                name="link"
                id="link"
                type="text"
                onChange={(e) => setLink(e.target.value)}
              />
            </div>

            <div className={dash.group}>
              <label for="textarea">Programm</label>
              <textarea
                required=""
                cols="50"
                rows="10"
                id="textarea"
                name="textarea"
              >
                {" "}
              </textarea>
            </div>
            <button type="submit" className={dash.submit} onClick={createEvent}>
              Add
            </button>
          </form>
        </div>
      </div>
      
       
      </div>
    </div>
  );
}
