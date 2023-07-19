import React from "react";
import "./Nota.css";

function Nota({ titulo, descripcion, importante }) {
  const className = importante ? "nota importante" : "nota";

  return (
    <div className={className}>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  );
}

export default Nota;