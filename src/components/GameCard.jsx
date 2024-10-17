import PropTypes from 'prop-types';

const GameCard = ({ name, released, background_image, platforms }) => {
  return (
    <div className="game-card">
      <img src={background_image} alt={name} />
      <h3>{name}</h3>
      <p>Release Date: {released}</p>
      <p>
        Platforms: {platforms.map(platform => platform.platform.name).join(', ')}
      </p>
    </div>
  );
};

GameCard.propTypes = {
  name: PropTypes.string.isRequired, // Nombre es obligatorio y debe ser string
  released: PropTypes.string.isRequired, // Fecha de lanzamiento es obligatoria
  background_image: PropTypes.string.isRequired, // La imagen de fondo es obligatoria
  platforms: PropTypes.arrayOf(
    PropTypes.shape({
      platform: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired, // Validación de plataformas
};

export default GameCard;
