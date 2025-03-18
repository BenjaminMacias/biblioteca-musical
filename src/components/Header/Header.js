import React from 'react'; // se importa React para poder usar JSX
import './Header.css'; // se importa estilos para este componente

const Header = () => { // Se declara el componente Header como una función
  return (
    <header>    {/* elemento HTML para encabezado*/}
      <h1>🎵 Mi Biblioteca Musical 🎵</h1>  {/* Título de la aplicación */}
    </header>
  );
};

export default Header;   // Se exporta el componente para usarlo en App.js