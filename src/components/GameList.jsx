import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import GameCard from './GameCard';
import './GameList.css';

const GameList = ({ games }) => {
  if (!games || games.length === 0) {
    return <p>No games found</p>;
  }

  return (
    <div className="game-list">
      {games.map((game) => (
        <Link to={`/game/${game.id}`} key={game.id} className="game-link">
          <GameCard
            name={game.name}
            metacritic={game.metacritic}
            released={game.released}
            background_image={game.background_image}
            platforms={game.platforms}
          />
        </Link>
      ))}
    </div>
  );
};

GameList.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      metacritic: PropTypes.string,
      released: PropTypes.string.isRequired,
      background_image: PropTypes.string.isRequired,
      platforms: PropTypes.arrayOf(
        PropTypes.shape({
          platform: PropTypes.shape({
            name: PropTypes.string.isRequired,
          }).isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default GameList;
