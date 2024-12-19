import React from "react";
import dash from "./dash.module.css";
import Sidebar from "./Sidebar";
export default function Dash() {
  return (
    <div className={dash.bod}>
      <div>
        <Sidebar></Sidebar>
      </div>
      <div>
        
      </div>
    </div>
  );
}
