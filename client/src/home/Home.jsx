import React from "react";
import home from "./home.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../image/c12.jpg";
import img2 from "../image/c9.jpg";
export default function Home() {
  return (
    <div>
      
        <Carousel>
          <Carousel.Item interval={2500}>
            <img className={home.image} src={img1} alt="Image One" />
            <Carousel.Caption>
              <h3 className={home.h3}>Bienvenue chez Fnart</h3>
              <p className={home.p}>Découvrez la beauté de la nature avec notre groupe de camping et de randonnée.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className={home.image} src={img2} alt="Image Two" />
            <Carousel.Caption>
              <h3 className={home.h3}>Aventures en Plein Air</h3>
              <p className={home.p}>Rejoignez Fnart pour des aventures inoubliables en pleine nature.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      <div className={home.div2}>

      </div>
      </div>
    
  );
}
