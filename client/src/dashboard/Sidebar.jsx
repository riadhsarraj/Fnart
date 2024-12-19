import React from "react";
import dash from "./dash.module.css";
export default function Sidebar() {
  const handleClick = () => {
    window.location.replace("/dashusers");
  };
  const handleClick1 = () => {
    window.location.replace("/dashevent");
  };
  const handleClick2 = () => {
    window.location.replace("/dashgalery");
  };
  const handleClick3 = () => {
    window.location.replace("/dashReservation");
  };
  const handleClick4 = () => {
    window.location.replace("/DashEvent2");
  };
  const handleClick6 = () => {
    window.location.replace("/dashMessage");
  };
  const handleClick7 = () => {
    window.location.replace("/dashMaterial");
  };
  return (
    <div>
      <div className="row">
        <div className="col">
          <div className={dash.col1}>
            <button
              className={dash.button}
              data-text="Awesome"
              onClick={handleClick}
            >
              <span className={dash.text}>&nbsp;Users&nbsp;</span>
              <span aria-hidden="true" className={dash.hover}>
                &nbsp;Users&nbsp;
              </span>
            </button>
            <button
              className={dash.button}
              data-text="Awesome"
              onClick={handleClick1}
            >
              <span className={dash.text}>&nbsp;Add Event&nbsp;</span>
              <span aria-hidden="true" className={dash.hover}>
                &nbsp;Add&nbsp;Event&nbsp;
              </span>
            </button>
            <button
              className={dash.button}
              data-text="Awesome"
              onClick={handleClick4}
            >
              <span className={dash.text}>&nbsp;Event&nbsp;</span>
              <span aria-hidden="true" className={dash.hover}>
                &nbsp;Event&nbsp;
              </span>
            </button>
            <button
              className={dash.button}
              data-text="Awesome"
              onClick={handleClick2}
            >
              <span className={dash.text}>&nbsp;Gallery&nbsp;</span>
              <span aria-hidden="true" className={dash.hover}>
                &nbsp;Gallery&nbsp;
              </span>
            </button>
            <button
              className={dash.button}
              data-text="Awesome"
              onClick={handleClick3}
            >
              <span className={dash.text}>&nbsp;Reservation&nbsp;</span>
              <span aria-hidden="true" className={dash.hover}>
                &nbsp;Reservation&nbsp;
              </span>
            </button>
            <button
              className={dash.button}
              data-text="Awesome"
              onClick={handleClick6}
            >
              <span className={dash.text}>&nbsp;Message&nbsp;</span>
              <span aria-hidden="true" className={dash.hover}>
                &nbsp;Message&nbsp;
              </span>
            </button>
           
          </div>
        </div>
      </div>
    </div>
  );
}
