import { useState } from 'react';
import './SideBar.css';
import PropTypes from 'prop-types';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? '⮜' : '⮞'}
      </button>
      {isOpen && (
        <ul>
          <li><button className="sidebar-button" onClick={() => window.location.href = '/'}>Inicio</button></li>
          <li><button className="sidebar-button" onClick={() => window.location.href = 'https://rawg.io/apidocs'}>API RAWG.IO</button></li>
          <li><p><strong>Filtros:</strong></p></li>
          <li><button className="sidebar-button" onClick={() => window.location.href = '/best-rated'}>Mejor Calificados</button></li>
          <li><button className="sidebar-button" onClick={() => window.location.href = '/released-this-year'}>Lanzados Este Año</button></li>
          <li><button className="sidebar-button" onClick={() => window.location.href = '/metacritic'}>Mejores Criticas</button></li>
          <li><button className="sidebar-button" onClick={() => window.location.href = '/name'}>Por nombre</button></li>
          <li><button className="sidebar-button" onClick={() => window.location.href = '/News'}>Noticias</button></li>
        </ul>
      )}
    </div>
  );
};

Sidebar.propTypes = {
  onBestRatedClick: PropTypes.func.isRequired,
  onReleasedThisYearClick: PropTypes.func.isRequired,
  onMetacriticClick: PropTypes.func.isRequired,
  onNameClick: PropTypes.func.isRequired,
  onNewsClick: PropTypes.func.isRequired,
};

export default Sidebar;
