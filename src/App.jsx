import { useEffect, useState } from 'react';
import Filters from './components/Filters';
import GameList from './components/GameList';
import Footer from './components/Footer';
import Home from './components/Home';
import { fetchInitialGames, fetchGames } from './services/apiRawrg';
import './App.css';

const App = () => {
  const [games, setGames] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [page, setPage] = useState(1); // Para manejar la paginación

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
    await fetchFilteredGames(genreId, selectedPlatform, 1); // Actualiza juegos según el género y la plataforma
  };

  // Actualizar juegos cuando se selecciona una plataforma
  const handlePlatformChange = async (event) => {
    const platformId = event.target.value;
    setSelectedPlatform(platformId);
    await fetchFilteredGames(selectedGenre, platformId, 1); // Actualiza juegos según la plataforma y el género
  };

  const loadMoreGames = async () => {
    const moreGames = await fetchInitialGames(page + 1); // Cargar la siguiente página
    setGames((prevGames) => [...prevGames, ...moreGames]); // Agregar más juegos a la lista existente
    setPage((prevPage) => prevPage + 1); // Incrementar la página
  };

  // Función para buscar juegos filtrados por género y/o plataforma
  const fetchFilteredGames = async (genreId, platformId) => {
    const filteredGames = await fetchGames(genreId, platformId); // Llamar a la función de fetch
    setGames(filteredGames); // Actualizar el estado de los juegos
  };

return (
  <div>
    <Home></Home>
    <div className="app-container">
      <div className="sidebar">
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#nuevos-lanzamientos">Nuevos Lanzamientos</a></li>
          <li><a href="#mejor-calificados">Mejor Calificados</a></li>
        </ul>
      </div>

      <div className="content">
        <h2>Juegos Nuevos en tendencia</h2>
        <Filters onGenreChange={handleGenreChange} onPlatformChange={handlePlatformChange}/>
        <GameList games={games} />
        <button onClick={loadMoreGames} className="load-more">
          Mostrar Más
        </button>
      </div>
    </div>
  <Footer/>
  </div>
  );
};

export default App;
