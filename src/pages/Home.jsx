import { Link } from 'react-router-dom'
import { useNews } from '../context/NewsContext.jsx'
import ArticleCard from '../components/ArticleCard.jsx'

export default function Home() {
  const { articles } = useNews()
  const [featured, ...rest] = articles
  const recent = rest.slice(0, 3)

  return (
    <div className="container">
      <section className="hero">
        <div>
          <p className="eyebrow">Today's Headlines</p>
          <h1>Master — Where Stories die ooo</h1>
          <p className="hero-sub">
            Independent journalism, community contributions, and the news that matters.
            Read the latest, browse by category, or share your own story.
          </p>
          <div className="hero-actions">
            <Link to="/latest" className="btn-primary">Read Latest</Link>
            <Link to="/post" className="btn-secondary">Post News</Link>
          </div>
        </div>
      </section>

      {featured && (
        <section className="featured">
          <h2>Featured</h2>
          <article className="featured-card">
            <span className="card-category">{featured.category}</span>
            <h3>
              <Link to={`/article/${featured.id}`}>{featured.title}</Link>
            </h3>
            <p>{featured.summary}</p>
            <div className="card-meta">
              <span>{featured.author}</span>
              <span>·</span>
              <span>{new Date(featured.createdAt).toLocaleString()}</span>
            </div>
          </article>
        </section>
      )}

      {recent.length > 0 && (
        <section className="section">
          <div className="section-head">
            <h2>More Stories</h2>
            <Link to="/latest" className="section-link">View all →</Link>
          </div>
          <div className="grid">
            {recent.map((a) => <ArticleCard key={a.id} article={a} />)}
          </div>
        </section>
      )}
    </div>
  )
}
