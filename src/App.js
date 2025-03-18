import React, { useState, useEffect } from 'react';   // Se importa React y los hooks
import './App.css';   // se importan los estilos globales
import Header from './components/Header/Header';   // Se importa el componente funcional Header
import SearchResults from './components/SearchResults/SearchResults';   // Se importa el componente funcional busqueda de resultados
import Library from './components/Library/Library';  // Se importa el componente funcional Libreria

function App() {
// useState para los resultados de búsqueda (datos ficticios)
  const [searchResults, setSearchResults] = useState([
    { title: "Musica Ligera", artist: "Soda Stereo", duration: "3:32" },
    { title: "Wind of change", artist: "Scorpions", duration: "5:12" },
    { title: "El sol no regresa", artist: "La quinta estación", duration: "3:48" }
  ]);

// useState para la biblioteca personalizada (vacía al inicio)
  const [library, setLibrary] = useState([]);

// Función para agregar canción a la biblioteca
  const addSongToLibrary = (song) => {

    // Se verifica que no exista duplicado
    if (!library.find(s => s.title === song.title)) {
      setLibrary([...library, song]);  // Se actualiza el estado
    }
  };

  // useEffect para imprimir mensaje cada vez que la biblioteca cambia
  useEffect(() => {
    console.log("La biblioteca ha sido actualizada:", library);
  }, [library]);  // Dependencia: library

  return (
    <div className="App">
      <Header />
      <div className="sections">  {/* Contenedor de las dos secciones */}
{/* Resultados de búsqueda */}
        <SearchResults 
        songs={searchResults}  // Lista de canciones ficticias
        onAddSong={addSongToLibrary} // Función para agregar
        library={library} />    {/* Se pasa la biblioteca actual para verificar duplicados */}

{/* Biblioteca personalizada */}
        <Library songs={library} /> {/* Lista de canciones agregadas */}
      </div>
    </div>
  );
}

export default App;  //Se exporta el componente