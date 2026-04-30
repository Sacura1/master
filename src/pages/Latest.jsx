import { useNews } from '../context/NewsContext.jsx'
import ArticleCard from '../components/ArticleCard.jsx'

export default function Latest() {
  const { articles } = useNews()
  return (
    <div className="container">
      <h1>Latest News</h1>
      <p className="page-sub">Every story, freshest first.</p>
      {articles.length === 0 ? (
        <p>No articles yet. Be the first to post one.</p>
      ) : (
        <div className="grid">
          {articles.map((a) => <ArticleCard key={a.id} article={a} />)}
        </div>
      )}
    </div>
  )
}
