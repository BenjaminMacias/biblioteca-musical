import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Song = ({ id, title, artist, duration, onAdd }) => {
  return (
    <div className="song">
      <h3>
      {id ? <Link to={`/song/${id}`}>{title}</Link> : title} {/* Solo el título es clickeable */}
        </h3>
      <p>Artist: {artist}</p>
      <p>Duration: {duration}</p>
      {onAdd && (
        <button className="add-button" onClick={onAdd}>Agregar a mi biblioteca</button>
      )}
    </div>
  );
};

export default Song;