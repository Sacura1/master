import { Link } from 'react-router-dom'

export default function ArticleCard({ article }) {
  const date = new Date(article.createdAt).toLocaleString()
  return (
    <article className="card">
      <span className="card-category">{article.category}</span>
      <h3 className="card-title">
        <Link to={`/article/${article.id}`}>{article.title}</Link>
      </h3>
      <p className="card-summary">{article.summary}</p>
      <div className="card-meta">
        <span>{article.author}</span>
        <span>·</span>
        <span>{date}</span>
      </div>
    </article>
  )
}
