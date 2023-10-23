import React, { useState } from "react";

const App = () => {
  const [selectedColor, setSelectedColor] = useState("yellow");
  return (
    <>
      <div className="traffic-light">
        <div
          onClick={() => setSelectedColor("red")}
          className={"light red" + (selectedColor === "red" ? " glow" : "")}
        ></div>
        <div
          onClick={() => setSelectedColor("yellow")}
          className={"light yellow" + (selectedColor === "yellow" ? " glow" : "")}
        ></div>
        <div
          onClick={() => setSelectedColor("green")}
          className={"light green" + (selectedColor === "green" ? " glow" : "")}
        ></div>
      </div>
    </>
  );
};

export default App;