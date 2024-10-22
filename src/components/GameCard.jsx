import PropTypes from 'prop-types';

const GameCard = ({ name, metacritic, released, background_image, platforms }) => {
  return (
    <div className="game-card">
      <img src={background_image} alt={name} />
      <h3>{name}</h3>
      <p>Metacritic: {metacritic}</p>
      <p>Release Date: {released}</p>
      <p>
        Platforms: {platforms.map(platform => platform.platform.name).join(', ')}
      </p>
    </div>
  );
};

GameCard.propTypes = {
  name: PropTypes.string.isRequired,
  metacritic: PropTypes.string.isRequired, 
  released: PropTypes.string.isRequired,
  background_image: PropTypes.string.isRequired,
  platforms: PropTypes.arrayOf(
    PropTypes.shape({
      platform: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default GameCard;
