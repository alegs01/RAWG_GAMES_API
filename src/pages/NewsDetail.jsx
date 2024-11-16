import { useLocation } from 'react-router-dom';
import "./Home.css";

const NewsDetail = () => {
  const location = useLocation();
  const { title, imageUrl } = location.state || {};

  // Genera una imagen aleatoria y un texto aleatorio
  const randomImage = `https://picsum.photos/600/400?random=${Math.floor(Math.random() * 100)}`;
  const randomText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro itaque alias minus exercitationem similique sed? Itaque inventore fugiat sunt sed, minima explicabo. Ad vero vel odio necessitatibus, error rerum eveniet.';

  return (
    <div className='homepage'>
    <div className="content">
      <h1>{title}</h1>
      <img src={imageUrl} alt={title} className="img-fluid" />
      <h2>Contenido Aleatorio</h2>
      <img src={randomImage} alt="Contenido aleatorio" className="img-fluid" />
      <p>{randomText}</p>
    </div>
    </div>
  );
};

export default NewsDetail;
