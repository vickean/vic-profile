import React from "react";
import "./App.css";
import { NavBarDrawer } from "./components/NavBarDrawer/NavBarDrawer";
import { About } from "./containers/About/About";
import { Hello } from "./containers/Hello/Hello";

function App() {
   return (
      <div>
         <NavBarDrawer />
         <Hello />
         <About />
      </div>
   );
}

export default App;
