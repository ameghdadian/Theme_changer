import React from "react";

import "./box.scss";

const Box = ({ changeBoxColor, boxColors, colorIndex }) => {
  return (
    <div
      style={{ backgroundColor: `${boxColors[colorIndex]}` }}
      className="box"
    >
      <button onClick={() => changeBoxColor()}>Change My Color</button>
    </div>
  );
};

export default Box;
