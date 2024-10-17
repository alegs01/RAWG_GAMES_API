import { useEffect, useState } from 'react';
import Filters from './components/Filters';
import GameList from './components/GameList';
import { fetchInitialGames, fetchGames } from './services/apiRawrg';
import './App.css';

const App = () => {
  const [games, setGames] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const initialGames = await fetchInitialGames(); // Cargar juegos iniciales
      setGames(initialGames);
    };
    fetchData();
  }, []);

  // Actualizar juegos cuando se selecciona un género
  const handleGenreChange = async (event) => {
    const genreId = event.target.value;
    setSelectedGenre(genreId);
    await fetchFilteredGames(genreId, selectedPlatform); // Actualiza juegos según el género y la plataforma
  };

  // Actualizar juegos cuando se selecciona una plataforma
  const handlePlatformChange = async (event) => {
    const platformId = event.target.value;
    setSelectedPlatform(platformId);
    await fetchFilteredGames(selectedGenre, platformId); // Actualiza juegos según la plataforma y el género
  };

  // Función para buscar juegos filtrados por género y/o plataforma
  const fetchFilteredGames = async (genreId, platformId) => {
    const filteredGames = await fetchGames(genreId, platformId); // Llamar a la función de fetch
    setGames(filteredGames); // Actualizar el estado de los juegos
  };

  return (
    <div className="app">
      <Filters 
        onGenreChange={handleGenreChange} 
        onPlatformChange={handlePlatformChange} 
      /> {/* Pasar los manejadores de cambio */}
      <GameList games={games} /> {/* Pasar la lista de juegos */}
    </div>
  );
};

export default App;
