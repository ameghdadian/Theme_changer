import React, { useState, useEffect } from "react";

import "./box.scss";

const Box = ({ color, changeBoxColor }) => {
  const boxColorCollection = color;
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const changeColor = () => {
    if (currentColorIndex === 2) {
      setCurrentColorIndex(0);
    } else {
      setCurrentColorIndex(currentColorIndex + 1);
    }
  };
  useEffect(() => {
    changeColor();
  }, [changeBoxColor]);
  return (
    <div
      style={{ backgroundColor: `${boxColorCollection[currentColorIndex]}` }}
      className="box"
    >
      <button onClick={() => changeColor()}>Change My Color</button>
    </div>
  );
};

export default Box;
