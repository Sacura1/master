import { useParams, Link } from 'react-router-dom'
import { useNews } from '../context/NewsContext.jsx'
import ArticleCard from '../components/ArticleCard.jsx'

export default function Categories() {
  const { category } = useParams()
  const { articles, categories } = useNews()

  if (category) {
    const filtered = articles.filter(
      (a) => a.category.toLowerCase() === category.toLowerCase()
    )
    return (
      <div className="container">
        <Link to="/categories" className="back-link">← All categories</Link>
        <h1>{category}</h1>
        {filtered.length === 0 ? (
          <p>No articles in this category yet.</p>
        ) : (
          <div className="grid">
            {filtered.map((a) => <ArticleCard key={a.id} article={a} />)}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="container">
      <h1>Categories</h1>
      <p className="page-sub">Pick a section to explore.</p>
      <div className="category-grid">
        {categories.map((c) => {
          const count = articles.filter((a) => a.category === c).length
          return (
            <Link key={c} to={`/categories/${encodeURIComponent(c)}`} className="category-tile">
              <h3>{c}</h3>
              <span>{count} {count === 1 ? 'story' : 'stories'}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
