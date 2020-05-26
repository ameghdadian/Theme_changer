import React, { useState } from "react";

import Box from "./components/box/box";

import "./App.scss";

function App() {
  const [changeColor, setChangeColor] = useState(false);

  return (
    <div className="App">
      <div className="boxes">
        <button
          className="main-btn"
          onClick={() => setChangeColor(!changeColor)}
        >
          Change All Colors
        </button>
        <Box changeBoxColor={changeColor} color={["red", "green", "blue"]} />
        <Box changeBoxColor={changeColor} color={["blue", "purple", "black"]} />
        <Box changeBoxColor={changeColor} color={["green", "blue", "red"]} />
      </div>
    </div>
  );
}

export default App;
