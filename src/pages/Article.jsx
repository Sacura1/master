import { useParams, Link } from 'react-router-dom'
import { useNews } from '../context/NewsContext.jsx'

export default function Article() {
  const { id } = useParams()
  const { getArticle } = useNews()
  const article = getArticle(id)

  if (!article) {
    return (
      <div className="container narrow">
        <h2>Article not found</h2>
        <Link to="/latest" className="back-link">← Back to latest</Link>
      </div>
    )
  }

  return (
    <div className="container narrow">
      <Link to="/latest" className="back-link">← Back</Link>
      <span className="card-category">{article.category}</span>
      <h1 className="article-title">{article.title}</h1>
      <div className="card-meta">
        <span>By {article.author}</span>
        <span>·</span>
        <span>{new Date(article.createdAt).toLocaleString()}</span>
      </div>
      {article.summary && <p className="article-summary">{article.summary}</p>}
      <div className="article-body">
        {article.content.split(/\n+/).map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </div>
  )
}
