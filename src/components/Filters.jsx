import PropTypes from 'prop-types';

const Filters = ({ onGenreChange, onPlatformChange }) => {
  const genres = [
    { id: 4, name: "Action" },
    { id: 51, name: "Indie" },
    { id: 3, name: "Adventure" },
    { id: 5, name: "RPG" },
    { id: 10, name: "Strategy" },
    { id: 2, name: "Shooter" },
    { id: 40, name: "Casual" },
    { id: 14, name: "Simulation" },
    { id: 7, name: "Puzzle" },
    { id: 11, name: "Arcade" },
    { id: 83, name: "Platformer" },
    { id: 1, name: "Racing" },
    { id: 59, name: "Massively Multiplayer" },
    { id: 15, name: "Sports" },
    { id: 6, name: "Fighting" },
    { id: 19, name: "Family" },
    { id: 28, name: "Board Games" },
    { id: 34, name: "Educational" },
    { id: 17, name: "Card" }
  ]
    const platforms= [
        { id: 4, name: "PC" },
    { id: 187, name: "PlayStation 5" },
    { id: 1, name: "Xbox One" },
    { id: 18, name: "PlayStation 4" },
    { id: 7, name: "Nintendo Switch" },
    { id: 3, name: "iOS" },
    { id: 21, name: "Android" },
    ];

  return (
    <div className="filters">
      <select onChange={onGenreChange}>
        <option value="">All Genres</option>
        {genres.map(genre => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
            <select onChange={onPlatformChange}>
        <option value="">All platforms</option>
        {platforms.map(platform => (
          <option key={platform.id} value={platform.id}>
            {platform.name}
          </option>
        ))}
      </select>
    </div>
  );
};

Filters.propTypes = {
  onGenreChange: PropTypes.func.isRequired,
  onPlatformChange: PropTypes.func.isRequired,
};

export default Filters;
