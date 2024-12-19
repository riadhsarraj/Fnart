import React from "react";
import event2 from "./event2.module.css";
import bus from "../image/bus.png";
import men from "../image/men.png";
import feu from "../image/feu.png";
import tente from "../image/tente.png";
import dejene from "../image/déjeuné.png";
import walk from "../image/walk.png";
import jeux from "../image/jeux.png";
import { useLocation } from "react-router-dom";
export default function Event2() {
  const { state } = useLocation();
  const { Linke } = state || {};
  console.log (Linke)
  return (
    <div className={event2.bod}>
      <div>
        <div className={event2.image}></div>
        <div className={event2.ss}>Camp Barrage sidi barrak</div>
      </div>
      <div className={event2.prog}>
        <div className="row">
          <div className="col">
            <div className={event2.programme}>
              <h1 className={event2.h1}>Programme</h1>
              <h5 className={event2.title}>𝐃𝐚𝐭𝐞: Samedi le 08 Juillet 2023</h5>
              <div className={event2.detail}>
                <img src={men} alt="" />
                <h5>
                  04h00 : Rassemblement beb bhar 
                </h5>
              </div>
              <div className={event2.detail}>
                <img src={bus} alt="" />
                <h5>04h30 : Départ vers notre destination barkoukech</h5>
              </div>
              <div className={event2.detail}>
                <img src={tente} alt="" />
                <h5>
                  12h00 : Arrivée au lieu de camp et installation des tentes
                  
                </h5>
              </div>
              <div className={event2.detail}>
                <img src={dejene} alt="" />
                <h5>20h00 : Dîner en groupe</h5>
              </div>
              <div className={event2.detail}>
                <img src={feu} alt="" />
                <h5>21h30 : Soirée avec notre guitariste.</h5>
              </div>
              <div className={event2.detail}>
                <img src={tente} alt="" />
                <h5>08h00 : Petit déjeuner en groupe</h5>
              </div>
              <div className={event2.detail}>
                <img src={dejene} alt="" />
                <h5>13h00 : Déjeuner</h5>
              </div>
              <div className={event2.detail}>
                <img src={jeux} alt="" />
                <h5>14H00 : Retour aux activités</h5>
              </div>
              <div className={event2.detail}>
                <img src={dejene} alt="" />
                <h5>20h00 : Dîner en groupe</h5>
              </div>
              <div className={event2.detail}>
                <img src={feu} alt="" />
                <h5>
                  21h00 : Soirée avec le guitariste et loupgarou 
                
                </h5>
              </div>
              <h5 className={event2.title}>
                𝐃𝐚𝐭𝐞: Dimanche le 09 Juillet 2023
              </h5>
              <div className={event2.detail}>
                <img src={dejene} alt="" />
                <h5>09h00: Petit déjeuner en groupe</h5>
              </div>
              <div className={event2.detail}>
                <img src={jeux} alt="" />
                <h5>10h00 : Baignade</h5>
              </div>
              <div className={event2.detail}>
                <img src={tente} alt="" />
                <h5>
                  12h00 : Désinstallation du matériel et nettoyage 🧹du lieu
                </h5>
              </div>
              <div className={event2.detail}>
                <img src={men} alt="" />
                <h5>14h00 : Départ vers Sfax</h5>
              </div>
              <div className={event2.detail}>
                <img src={bus} alt="" />
                <h5>22h00 : arrivée probable à sousse</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div class={event2.card}>
              <div className={event2.lieu}>
                <h3>Lieu de l'événement</h3>
              </div>
              <iframe
                src={Linke}
                className={event2.map}
                width="400"
                height="350"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <h3 className={event2.acc}>Activités</h3>
              <h6 className={event2.cont}>
                Randonnée pédestre, Pêche en haute mer, Camping, Feu de camp,
                Baignade en mer, Tir à l’arc, Volleyball, badminton
              </h6>
              <h3 className={event2.h3}>Partager l'événement</h3>
              <div className={event2.partage}>
              <div class={event2.child}>
                <button class={event2.button.btn}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                    fill="#ff00ff"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                </button>
              </div>
              <div class={event2.child}>
                <button class={event2.button.btn}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 320 512"
                    fill="#4267B2"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
