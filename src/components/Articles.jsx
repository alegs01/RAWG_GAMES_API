import { useNavigate } from 'react-router-dom';
import './Articles.css';

const NewsArticles = () => {
  const navigate = useNavigate(); // Inicializa el navigate

  const articles = [
    {
      title: "Noticia 1",
      imageUrl: "https://picsum.photos/200/150?random=1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Noticia 2",
      imageUrl: "https://picsum.photos/200/150?random=2",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      title: "Noticia 3",
      imageUrl: "https://picsum.photos/200/150?random=3",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      title: "Noticia 4",
      imageUrl: "https://picsum.photos/200/150?random=4",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "Noticia 5",
      imageUrl: "https://picsum.photos/200/150?random=5",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "Noticia 6",
      imageUrl: "https://picsum.photos/200/150?random=6",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
  ];

  const handleReadMore = (article) => {
    navigate('/news-detail', {
      state: { 
        title: article.title, 
        imageUrl: article.imageUrl, 
        description: article.description 
      },
    });
  };

  return (
    <div className="row container">
      {articles.map((article, index) => (
        <div className="col-md-6 col-lg-4 mb-4" key={index}>
          <div className="card news-card">
            <img src={article.imageUrl} className="card-img-top" alt={article.title} />
            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">{article.description}</p>
              <button className="btn btn-primary" onClick={() => handleReadMore(article)}>Leer Más</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsArticles;
