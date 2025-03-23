import React from 'react';
import Song from '../Song/Song';
import './styles.css';

const Library = ({ songs }) => {
  return (
    <div className="library">
      <h2>Mi Biblioteca</h2>
      {songs.length === 0 ? (
        <p>No has agregado canciones aún.</p>
      ) : (
        songs.map((song, index) => (
          <Song 
            key={index}
            id={song.idAlbum}
            title={song.strAlbum}
            artist={song.strArtist}
            duration="N/A"
          />
        ))
      )}
    </div>
  );
};

export default Library;