import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGameDetails } from '../services/apiRawrg';
import Sidebar from '../components/SideBar';

const GameDetailed = () => {
  const { slug } = useParams(); 
  const [game, setGame] = useState(null);

  useEffect(() => {
    const getGameDetails = async () => {
      const data = await fetchGameDetails('core-keeper'); 
      setGame(data);
    };
    getGameDetails();
  }, [slug]);

  if (!game) return <div>Loading...</div>;

  return (
    <div className='content'>
    <Sidebar></Sidebar>
    <div className="game-detail">
      <h1>{game.name}</h1>
      <img src={game.background_image} alt={game.name} />
      <p>{game.description_raw}</p>
      <h3>Rating: {game.rating} / 5</h3>
      <p>Released: {game.released}</p>
      <div className="platforms">
        <h4>Available on:</h4>
        {game.platforms.map((platform) => (
          <span key={platform.platform.id}>{platform.platform.name}</span>
        ))}
      </div>
      <div className="genres">
        <h4>Genres:</h4>
        {game.genres.map((genre) => (
          <span key={genre.id}>{genre.name}</span>
        ))}
      </div>
    </div>
    </div>
  );
};

export default GameDetailed;
