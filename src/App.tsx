import React from "react";
import "./App.css";
import { NavBarDrawer } from "./components/NavBarDrawer/NavBarDrawer";
import { About } from "./containers/About/About";

function App() {
  return (
    <div>
      <NavBarDrawer />
      <About />
    </div>
  );
}

export default App;
