import PropTypes from 'prop-types';
import GameCard from './GameCard';
import './GameList.css';

const GameList = ({ games }) => {
  if (!games || games.length === 0) {
    return <p>No games found</p>; // Manejar cuando no hay juegos
  }

  return (
    <div className="game-list">
      {games.map((game) => (
        <GameCard
          key={game.id}
          name={game.name}
          released={game.released}
          background_image={game.background_image}
          platforms={game.platforms}
        />
      ))}
    </div>
  );
};

GameList.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
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
