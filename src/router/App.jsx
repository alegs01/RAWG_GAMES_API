import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import BestRated from '../pages/BestRated';
import ReleasedThisYear from '../pages/ReleasedThisYear';
import Metacritic from '../pages/Metacritic';
import Footer from '../components/Footer';
import NewsDetail from '../pages/NewsDetail';
import GameDetail from '../components/GameDetail';
import GameDetailed from '../pages/Carousel1';
import News from '../pages/News';
import Name from '../pages/Name';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from '../components/ErrorBoundary';
import Sidebar from '../components/SideBar';


const App = () => {
  return (
    <ErrorBoundary>
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News/>} />
          <Route path="/news-detail" element={<NewsDetail />} />
          <Route path="/best-rated" element={<BestRated />} />
          <Route path="/released-this-year" element={<ReleasedThisYear />} />
          <Route path="/metacritic" element={<Metacritic/>} />
          <Route path="/name" element={<Name/>} />
          <Route path="/game/:slug" element={<GameDetail />} />
          <Route path="/game/:id" element={<GameDetailed />} />
        </Routes>
        <Footer />
    </ErrorBoundary>
  );
};

export default App;
