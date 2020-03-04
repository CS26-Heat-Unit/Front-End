import React from "react";

import Header from "./components/Header";
import Console from "./components/Console";
import Login from "./components/Login";
import Map from "./components/Map"

function App() {
  return (
    <div className="App">
      <Login />
      <Header />
      <Console />
      <Map />
    </div>
  );
}

export default App;
