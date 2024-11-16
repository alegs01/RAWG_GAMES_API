import NewsArticles from '../components/Articles';

const News = () => {
  return (
        <div className='content'>
          <section className="news">
            <h2>Noticias Recientes</h2>
            <NewsArticles />
          </section>
        </div>
  )
}

export default News;