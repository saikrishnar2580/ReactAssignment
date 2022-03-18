import "./styles.css";
import React from "react";
import BasicRouter from "./Router/BasicRouter";

import MenuAppBar from "./MenuAppBar";

export default function App() {
  return (
    <div className="App">
      <MenuAppBar />
      <BasicRouter />
    </div>
  );
}
