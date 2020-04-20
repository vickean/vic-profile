import React from "react";
import "./App.css";
import { NavBarDrawer } from "./components/NavBarDrawer/NavBarDrawer";
import { About } from "./containers/About/About";
import { Hello } from "./containers/Hello/Hello";
import { Skills } from "./containers/Skills/Skills";
import { Contact } from "./containers/Contact/Contact";
import { Work } from "./containers/Work/Work";

function App() {
   return (
      <div>
         <NavBarDrawer />
         <Hello id="helloSec" />
         <About id="aboutSec" />
         <Skills id="skillsSec" />
         <Work id="workSec" />
         <Contact id="contactSec" />
      </div>
   );
}

export default App;
