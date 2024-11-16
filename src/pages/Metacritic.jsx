import { useEffect, useState } from 'react';
import { fetchGames } from '../services/apiRawrg';
import GameList from '../components/GameList';
import Filters from '../components/Filters';


const Metacritic = () => {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('');

  useEffect(() => {
    const fetchMetacritic = async () => {
      const bestRatedGames = await fetchGames(selectedGenre, selectedPlatform, 1, 'metacritic');
      setGames(bestRatedGames);
    };

    fetchMetacritic();
  }, [selectedGenre, selectedPlatform]);

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const handlePlatformChange = (e) => {
    setSelectedPlatform(e.target.value);
  };

  const loadMoreGames = async () => {
    const moreGames = await fetchGames(selectedGenre, selectedPlatform, page + 1, 'metacritic');
    setGames((prevGames) => [...prevGames, ...moreGames]);
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className='content'>
      <h1>Mejor Metacritic</h1>
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

export default Metacritic;
