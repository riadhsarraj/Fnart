import React, { useState } from "react";
import img from "../image/personage.jpg";
import cont from "./contact.module.css";
import Axios from "axios";
export default function Contact() {
  const [Fullname, setFullname] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Message, setMessage] = useState("");
  const createMessage = async (e) => {
    e.preventDefault();
    await Axios.post("http://localhost:3001/createMessage", {
      Fullname: Fullname,
      Email :Email ,
      Phone :Phone,
      Message :Message
      
    });
    alert("Message created");
    window.location.replace("/Contact");
  };
  return (
    <div>
      
      <div className="row">
        <div className="col">
          <img src={img} alt="" className={cont.img} />
        </div>

        <div className="col">
          <h3 className={cont.h3}>Contact-us</h3>
          <div className={cont.group}>
            <label className={cont.label}>Fullname</label>
            <input
              autoComplete="off"
              name="Fullname"
              id="Fullname"
              className={cont.input}
              type="text"
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
          <div className={cont.group}>
            <label className={cont.label}>Email</label>
            <input
              autoComplete="off"
              name="Email"
              id="Email"
              className={cont.input}
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={cont.group}>
            <label className={cont.label}>Phone</label>
            <input
              autoComplete="off"
              name="Phone"
              id="Phone"
              className={cont.input}
              type="number"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className={cont.group}>
            <label className={cont.label}>Message</label>
            <input
              autoComplete="off"
              name="Message"
              id="Message"
              className={cont.Message}
              type="text"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button className={cont.button} onClick={createMessage}>
            Send
            <div className={cont.wrapper}>
              <div className={cont.arrow}></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
