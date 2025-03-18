import React, { useState } from 'react';  // Se importa React para poder usar JSX y el Hooks useState para manejar un estado local para la búsqueda.
import Song from '../Song/Song'; //Se importa Song para mostrar cada canción.
import './SearchResults.css';    // Se importan los estilos para este componente

const SearchResults = ({ songs, onAddSong, library }) => {  // se define componente funcional SearchResults para la lista completa de canciones, para agregar una cancion a la biblioteca y para la lista de canciones agregadas
  // Estado local para el texto de búsqueda
  const [searchTerm, setSearchTerm] = useState('');  //Se crea un estado local searchTerm con useState, que comienza vacío ''.  Este estado guarda lo que el usuario escribe en la barra de búsqueda.

  // Función para actualizar el estado cuando el usuario escribe
  const handleSearchChange = (e) => {  //Se crea una función handleSearchChange que actualiza el estado cada vez que el usuario escribe algo. e.target.value obtiene el texto del input.
    setSearchTerm(e.target.value);
  };

  // Filtrar canciones por título o artista. Solo se mostrarán las canciones que coincidan.
  const filteredSongs = songs.filter((song) =>  //Se usa .filter() para filtrar la lista de canciones.
    song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||  //Se convierte el título y el artista a minúsculas con .toLowerCase() para que no importe si el usuario escribe en mayúsculas o minúsculas.
    song.artist.toLowerCase().includes(searchTerm.toLowerCase())  //Se usa .includes() para ver si el texto ingresado por el usuario está incluido en el título o artista.
  );

  return (  //Se devuelve un div contenedor con clase CSS search-results.
    <div className="search-results">
      <h2>Resultados de Búsqueda</h2>

{/* Barra de búsqueda */}
      <input
        type="text"
        placeholder="Buscar por título o artista..."
        value={searchTerm}  //el valor del input está conectado al estado.
        onChange={handleSearchChange} //cada vez que se escribe, se actualiza el estado.
        className="search-bar"  //para aplicar estilos
      />


{/*Se itera para cada canción filtrada y se pasan las props para cada canción  (title, artist, duration)*/}
      {filteredSongs.map((song, index) => (  //para mostrar solo las canciones filtradas:
        <Song
          key={index}
          title={song.title}
          artist={song.artist}
          duration={song.duration}
          onAdd={() => onAddSong(song)} // Al hacer click se llama la función para agregarla
          isInLibrary={library.some(s => s.title === song.title)}  // Se revisa si ya está en la biblioteca
        />
      ))}
    </div>
  );
};

export default SearchResults; //Se exporta el componente para usarlo en App.js.

