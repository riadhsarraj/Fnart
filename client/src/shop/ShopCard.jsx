import React from "react";
import shop from './Shop.module.css';
const ShopCard = ({ Fullname, Space, Description, date, photo }) => {
    return (
      <div>
        <div className={card.card}>
        <p className={card.space}>{Space} </p>
          <div className={card.img}>
            {" "}
            <img src={photo} alt="" className={card.phot} />
          </div>
          <p className={card.title}>{Fullname} </p>
          <p className={card.body}>
            {Description}
          </p>
          <p className={card.footer}>
            
            <span>{date}</span>
          </p>
        </div>
      </div>
    );
  };
  
  export default ShopCard;