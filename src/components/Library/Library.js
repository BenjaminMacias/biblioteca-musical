import React from 'react';
import Song from '../Song/Song';   // Se importa el componente funcional Song
import './Library.css';     // Se importan los estilos para el componente


// Se reciben las canciones que están en la biblioteca
const Library = ({ songs }) => {
  return (
    <div className="library">    {/* Se crea un contenedor */}
      <h2>Mi Biblioteca</h2>

{/* Si la biblioteca está vacía, se muestra un mensaje */}
      {songs.length === 0 ? (
        <p>Aún no has agregado canciones.</p>
      ) : (
        // Si hay canciones, se muestran
        songs.map((song, index) => (
          <Song
            key={index}
            title={song.title}
            artist={song.artist}
            duration={song.duration}
            isInLibrary={true}    // Se indica que ya está en la biblioteca
          />
        ))
      )}
    </div>
  );
};

export default Library;   // Se exporta el componente