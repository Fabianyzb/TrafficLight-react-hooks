import React, { useState } from "react";

const App = () => {
  const colors = ["red", "yellow", "green", "purple"];
  const [selectedColor, setSelectedColor] = useState("yellow");

  const changeColor = () => {  /* FUNCION PARA CAMBIAR EL COLOR */
    const currentIndex = colors.indexOf(selectedColor);
    const nextIndex = (currentIndex + 1) % colors.length;
    setSelectedColor(colors[nextIndex]);
  };

  const addPurple = () => {
    setSelectedColor("purple");
  };

  return (
    <>
      <div className="traffic-light">
        <div
          onClick={() => setSelectedColor("red")}
          className={"light red" + (selectedColor === "red" ? " glow" : "")}
        ></div>
        <div
          onClick={() => setSelectedColor("yellow")}
          className={
            "light yellow" + (selectedColor === "yellow" ? " glow" : "")
          }
        ></div>
        <div
          onClick={() => setSelectedColor("green")}
          className={"light green" + (selectedColor === "green" ? " glow" : "")}
        ></div>
        <div
          onClick={() => setSelectedColor("purple")}
          className={"light purple" + (selectedColor === "purple" ? " glow" : "")}
        ></div>
      </div>
      {/* BOTON PARA CAMBIAR EL COLOR */}
      <button onClick={changeColor}>Cambiar Color</button> {/* onClick llama a la funcion changeColor y cambia el color seleccionado del semáforo al siguiente color en la lista (rojo -> amarillo -> verde -> rojo, etc.). */}
      <button onClick={addPurple}>Añadir Púrpura</button>
    </>
  );
};

export default App;
