import { useEffect, useState } from 'react';
import { fetchGamesYear } from '../services/apiRawrg';
import GameList from '../components/GameList';
import Filters from '../components/Filters';

const ReleasedThisYear = () => {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('');

  // Efecto para cargar los juegos lanzados en 2024
  useEffect(() => {
    const fetchReleasedGames = async () => {
      const releasedGames = await fetchGamesYear(selectedGenre, selectedPlatform, 1);
      setGames(releasedGames);
    };

    fetchReleasedGames();
  }, [selectedGenre, selectedPlatform]);

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const handlePlatformChange = (e) => {
    setSelectedPlatform(e.target.value);
  };

  const loadMoreGames = async () => {
    const moreGames = await fetchGamesYear(selectedGenre, selectedPlatform, page + 1);
    setGames((prevGames) => [...prevGames, ...moreGames]);
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className='content'>
      <h1>Juegos Lanzados en 2024</h1>
      <Filters onGenreChange={handleGenreChange} onPlatformChange={handlePlatformChange} />
      <GameList games={games} />
      {games.length > 0 && (
        <button onClick={loadMoreGames} className="load-more">
          Mostrar Más
        </button>
      )}
    </div>
  );
};

export default ReleasedThisYear;
