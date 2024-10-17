import { useEffect, useState } from 'react';
import Filters from './components/Filters';
import GameList from './components/GameList';
import { fetchInitialGames, fetchGames } from './services/apiRawrg';
import './App.css';

const App = () => {
  const [games, setGames] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const initialGames = await fetchInitialGames(); // Cargar juegos iniciales
      setGames(initialGames);
    };
    fetchData();
  }, []);

  // Esta función se ejecutará cuando el usuario seleccione un género
  const handleGenreChange = async (event) => {
    const genreId = event.target.value;
    setSelectedGenre(genreId);

    if (genreId) {
      const filteredGames = await fetchGames(genreId); // Hacer consulta de juegos por género
      setGames(filteredGames); // Actualizar juegos según el género seleccionado
    } else {
      const initialGames = await fetchInitialGames(); // Volver a cargar los juegos iniciales si se deselecciona
      setGames(initialGames);
    }
  };

  return (
    <div className="app">
      <Filters onGenreChange={handleGenreChange} /> {/* Pasar el manejador de cambio de género */}
      <GameList games={games} /> {/* Pasar la lista de juegos */}
    </div>
  );
};

export default App;
