import React from 'react';
import Song from '../Song/Song';
import './styles.css';

const SearchResults = ({ data, loading, error, onAdd, refetch }) => {
  if (loading) return <p>Cargando...</p>;
  if (error) return <div><p>{error}</p><button onClick={refetch}>Reintentar</button></div>;
  if (!data || !data.album) return <p>No hay resultados.</p>;

  const albums = data.album;

  return (
    <div className="search-results">
      <h2>Resultados de búsqueda</h2>
      {albums.map((album) => (
        <div key={album.idAlbum}>
{/*          <Link to={`/song/${album.idAlbum}`}>*/}
            <Song
              title={album.strAlbum}
              artist={album.strArtist}
              duration="N/A"
              onAdd={() => onAdd(album)}
            />
{/*}          </Link>*/}
        </div>
      ))}
    </div>
  );
};

export default SearchResults;