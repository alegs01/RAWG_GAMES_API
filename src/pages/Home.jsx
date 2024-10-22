import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Filters from '../components/Filters';
import Sidebar from '../components/SideBar';
import GameList from '../components/GameList';
import NewsArticles from '../components/Articles';
import { fetchGames } from '../services/apiRawrg';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const newsRef = useRef(null);

  useEffect(() => {
    const fetchInitial = async () => {
      const bestRatedGames = await fetchGames(selectedGenre, selectedPlatform, 1, 'rating');
      setGames(bestRatedGames);
    };

    fetchInitial();
  }, [selectedGenre, selectedPlatform]);
  // Función para manejar el cambio de género
  const handleGenreChange = (event) => {
    const genreId = event.target.value;
    setSelectedGenre(genreId);
  };

  // Función para manejar el cambio de plataforma
  const handlePlatformChange = (event) => {
    const platformId = event.target.value; 
    setSelectedPlatform(platformId);
  };

    const loadMoreGames = async () => {
    const moreGames = await fetchGames(selectedGenre, selectedPlatform, page + 1, 'rating');
    setGames((prevGames) => [...prevGames, ...moreGames]);
    setPage((prevPage) => prevPage + 1);
  };

   const handleScrollToNews = () => {
    if (newsRef.current) {
      newsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="homepage">
      <Sidebar onNewsClick={handleScrollToNews}/>
      <div className="content">
        <header>
          <h1 className='title'>Bienvenido a <h1 className='title-name'> &nbsp;Games API</h1></h1>
          <p>Encuentra tus juegos favoritos y explora nuevos lanzamientos.</p>
        {/* Carrusel de Imágenes */}
        <Carousel fade className="game-carousel">
          <Carousel.Item>
            <Link to="/game/481913">
              <img
                className="d-block w-100"
                src="https://www.hardreset.info/media/resetinfo/2024/233/3ad20ae6e86d4f7b90de2c6d4a6abd0b.jpg"
                alt="Black Myth Wukong"
              />
              <Carousel.Caption>
                <h3>Black Myth Wukong</h3>
                <p>Aventura épica basada en la mitología china.</p>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/game/616688">
            <img
              className="d-block w-100"
              src="https://media.vandal.net/m/11-2023/16/2023111611513126_1.jpg"
              alt="Core Keeper"
            />
            <Carousel.Caption>
              <h3>Core Keeper</h3>
              <p>Explora, construye y sobrevive en un mundo subterráneo.</p>
            </Carousel.Caption>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/game/962020">
            <img
              className="d-block w-100"
              src="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5Rmy8w4e4mlCugxsmI7ow6/c57cab3aa52ed0d55fbff4920a785d77/swo-keyart-thumbnail-960x540.jpg"
              alt="Star Wars Outlaws"
            />
            <Carousel.Caption>
              <h3>Star Wars Outlaws</h3>
              <p>Conviértete en un ladrón en el universo Star Wars.</p>
            </Carousel.Caption>
            </Link>
          </Carousel.Item>
        </Carousel>
        </header>




        <section className="featured-games">
          <h2>Juegos Destacados</h2>
        <Filters onGenreChange={handleGenreChange} onPlatformChange={handlePlatformChange} />
          <GameList games={games} />
          {games.length > 0 && (
            <button onClick={loadMoreGames} className="load-more">
              Mostrar Más
            </button>
          )}
        </section>

        <section ref={newsRef} className="news">
          <h2>Noticias Recientes</h2>
          <NewsArticles />
        </section>
      </div>
    </div>
  );
};

export default Home;
