import React, { useEffect, useState } from 'react';
import gallery from "./gallery.module.css";
import Axios from "axios";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import GalleryCard from './GalleryCard';
import { useNavigate } from 'react-router-dom';
export default function Gallery() {
  const [Fullname, setFullname] = useState("");
  const [Space, setSpace] = useState("");
  const [Description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [photo, setPhoto] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (newDate) => {
    if (newDate && newDate.$d) {
      const day = newDate.$d.getDate();
      const month = newDate.$d.getMonth() + 1;
      const year = newDate.$d.getFullYear();
      const formattedDate = `${day}-${month}-${year}`;
      setSelectedDate(newDate);
      setDate(formattedDate);
    }
  };

  const imageHandler = (e) => {
    setPhoto(e.target.files[0]);
  };

  const creategallery = async (event) => {
    event.preventDefault();

    const gallerie = {
      Fullname,
      Space,
      Description,
      date,
      
      photo: ""
    };

    let responseData = {};
    let formData = new FormData();
    formData.append("image", photo);

    try {
      // Upload image
      const uploadResponse = await fetch("http://localhost:3001/upload", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });
      const uploadData = await uploadResponse.json();
      responseData = uploadData;

      if (responseData.success) {
        gallerie.photo = responseData.image_url;

        // Register user
        const registerResponse = await fetch("http://localhost:3001/creategallery", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(gallerie),
        });
       

        if (registerResponse) {
          alert("Gallery created successfully");
          window.location.replace("/Gallery")
        } else {
          alert("hello");
        }
      } else {
        alert("Image upload failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again");
    }
    
  };
  const [Gal, setGal] = useState([]);
  const nav = useNavigate();
  useEffect(() => {
    const fetchGal = async () => {
      try {
        const response = await Axios.get('http://localhost:3001/allAccepted');
        setGal(response.data.data);
      } catch (error) {
        console.error('Error fetching Gal', error);
      }
    };

    fetchGal();
  }, []);
  return (
    <div className={gallery.bod}>
      <div>
        <div className={gallery.image}></div>
        <div className={gallery.ss}>Notre galerie de camping et de randonnée</div>
      </div>
      <div className={gallery.fo}>
        <form className={gallery.form} onSubmit={creategallery}>
          <div className="row">
            <div className={gallery.grad}>
              <h1 className={gallery.h11}>Bienvenue à la galerie de Fnart</h1>
            </div>
            <div className="col">
              <div className={gallery.colom1}>
                <div className="row">
                  <label htmlFor="Fullname" className={gallery.label}>
                  Nom
                  </label>
                  <input
                    placeholder="Entrez votre nom complet..."
                    className={gallery.input}
                    name="Fullname"
                    type="text"
                    required
                    onChange={(e) => setFullname(e.target.value)}
                  />
                </div>
                <div className="row">
                  <label htmlFor="Space" className={gallery.label}>
                  destination
                  </label>
                  <input
                    placeholder="Entrez votre destination..."
                    className={gallery.input}
                    name="Space"
                    type="text"
                    onChange={(e) => setSpace(e.target.value)}
                  />
                </div>
                <div className="row">
                  <label htmlFor="Description" className={gallery.label}>
                  Description
                  </label>
                  <input
                    placeholder="Enter your Description..."
                    className={gallery.input}
                    name="Description"
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="col">
              <div className="row">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <StaticDatePicker
                    orientation="landscape"
                   
                    value={selectedDate}
                    onChange={handleDateChange}
                  />
                </LocalizationProvider>
              </div>
              <div className="row">
                <h5 className={gallery.h5}>Mettez vos photos</h5>
                <div className={gallery.grid}>
                  <input
                    id="picture"
                    type="file"
                    className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
                    onChange={imageHandler}
                  />
                </div>
              </div>
              <button type="submit" className={gallery.button}>
                <span>Ajouter</span>
              </button>
            </div>
          </div>
          
        </form>
        <div className={gallery.c}>
          {Gal.map(Gallery => (
            <GalleryCard
              key={Gallery._id}
              Fullname={Gallery.Fullname}
              photo={Gallery.photo}
              Description={Gallery.Description}
              date={Gallery.date}
              Space={Gallery.Space}
              
              
            />
          ))}
        </div>
      </div>
    
    </div>

  );
}
