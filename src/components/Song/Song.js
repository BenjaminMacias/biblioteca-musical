import React from 'react';
import './Song.css';   // se importa los estilos para Song


// Se define el componente y se desestructuran las props: título, artista, duración, onAdd y si ya está en la biblioteca
const Song = ({ title, artist, duration, onAdd, isInLibrary }) => {
  return (
    <div className="song">   {/* Se crea un contenedor con clase CSS */}
      <h2>{title}</h2>      {/* Se muestra el título */}
      <p>Artista: {artist}</p>     {/* Se muestra el artista */}
      <p>Duración: {duration}</p>   {/* Se muestra la duración */}

{/* Si existe la función onAdd y la canción no está en la biblioteca, se muestra el botón */}
      {onAdd && !isInLibrary && (
        <button onClick={onAdd}>Agregar a mi biblioteca</button>
      )}
{/* Si ya está en la biblioteca, mostramos el texto correspondiente */}
      {isInLibrary && <p className="in-library">Ya está en tu biblioteca</p>}
    </div>
  );
};

export default Song;  // se exporta el componente