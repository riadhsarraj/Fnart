import React, { useEffect, useState } from "react";

import dash from "./dashevent.module.css";
import Sidebar from "./Sidebar";
export default function DashMaterial() {
  return (
    <div className={dash.bod}>
    <div className="">
      <Sidebar></Sidebar>
    </div>
    </div>
  )
}
