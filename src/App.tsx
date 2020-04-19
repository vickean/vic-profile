import React from "react";
import "./App.css";
import { NavBarDrawer } from "./components/NavBarDrawer/NavBarDrawer";
import { About } from "./containers/About/About";
import { Hello } from "./containers/Hello/Hello";

function App() {
   return (
      <div>
         <NavBarDrawer />
         <Hello id="helloSec" />
         <About id="aboutSec" />
         <div id="skillsSec" />
         <div id="workSec" />
         <div id="contactSec" />
      </div>
   );
}

export default App;
