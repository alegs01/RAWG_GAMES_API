import { useEffect, useState } from 'react';
import { fetchGames } from '../services/apiRawrg';
import GameList from '../components/GameList';
import Filters from '../components/Filters';
import Sidebar from '../components/SideBar';

const Name = () => {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('');

  useEffect(() => {
    const fetchName = async () => {
      const byName = await fetchGames(selectedGenre, selectedPlatform, 1, 'name');
      setGames(byName);
    };

    fetchName();
  }, [selectedGenre, selectedPlatform]);

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const handlePlatformChange = (e) => {
    setSelectedPlatform(e.target.value);
  };

  const loadMoreGames = async () => {
    const moreGames = await fetchGames(selectedGenre, selectedPlatform, page + 1, 'name');
    setGames((prevGames) => [...prevGames, ...moreGames]);
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <Sidebar></Sidebar>
      <h1>Mejores Calificados</h1>
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

export default Name;
