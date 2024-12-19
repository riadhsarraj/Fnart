import React, { useEffect, useState } from "react";
import axios from "axios";
import dash from "./dashuser.module.css";
import Sidebar from "./Sidebar";

export default function DasshMessage() {
  const [message, setmessage] = useState([]);
  const fetchmessage = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/allmessage`);
      setmessage(response.data.data);
    } catch (error) {
      console.log("Erreur");
    }
  };
  useEffect(() => {
    fetchmessage();
  }, []);
  return (
    <div className={dash.bod}>
      <div className="">
        <Sidebar></Sidebar>
      </div>
      <div>
        <h1 className={dash.h1}>Liste des Message</h1>
        <table className={dash.table}>
          <thead>
            <tr>
              <th className={dash.th1}></th>
              <th className={dash.th1}>Fullname</th>
              <th className={dash.th1}>Email</th>
              <th className={dash.th1}>Phone</th>
              <th className={dash.th1}>Message</th>
              <th className={dash.th1}></th>
            </tr>
          </thead>
          <tbody>
            {message.map((item, index) => (
              <tr key={index}>
                <td className={dash.td1}></td>
                <td className={dash.td1}>{item.Fullname}</td>
                <td className={dash.td1}>{item.Email}</td>
                <td className={dash.td1}>{item.Phone}</td>
                <td className={dash.td1}>{item.Message}</td>
                <td className={dash.td1}></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
