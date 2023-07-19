import React from 'react';
import Nota from './Nota';
import "./ListaNotas.css";

function ListaNotas({ notas }) {
  return (
    <div className="lista-notas">
      {notas.map((nota) => (
        <Nota
          key={nota.id}
          titulo={nota.titulo}
          descripcion={nota.descripcion}
          importante={nota.importante}
        />
      ))}
    </div>
  );
}

export default ListaNotas;