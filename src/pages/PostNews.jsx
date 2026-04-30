import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useNews } from '../context/NewsContext.jsx'

const DEFAULT_CATEGORIES = ['World', 'Business', 'Technology', 'Sports', 'Entertainment', 'Science', 'Opinion']

export default function PostNews() {
  const { addArticle, categories } = useNews()
  const navigate = useNavigate()
  const allCategories = Array.from(new Set([...DEFAULT_CATEGORIES, ...categories]))

  const [form, setForm] = useState({
    title: '',
    author: '',
    category: allCategories[0],
    summary: '',
    content: '',
  })
  const [error, setError] = useState('')

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    if (!form.title.trim() || !form.author.trim() || !form.content.trim()) {
      setError('Title, author and content are required.')
      return
    }
    const summary = form.summary.trim() || form.content.trim().slice(0, 140) + '…'
    const article = addArticle({ ...form, summary })
    navigate(`/article/${article.id}`)
  }

  return (
    <div className="container narrow">
      <h1>Post a News Story</h1>
      <p className="page-sub">Share what matters with the Master community.</p>

      <form className="form" onSubmit={onSubmit}>
        <label>
          <span>Title</span>
          <input value={form.title} onChange={update('title')} placeholder="A clear, compelling headline" />
        </label>

        <div className="form-row">
          <label>
            <span>Author</span>
            <input value={form.author} onChange={update('author')} placeholder="Your name" />
          </label>
          <label>
            <span>Category</span>
            <select value={form.category} onChange={update('category')}>
              {allCategories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </label>
        </div>

        <label>
          <span>Summary <em>(optional)</em></span>
          <input value={form.summary} onChange={update('summary')} placeholder="A short teaser" />
        </label>

        <label>
          <span>Content</span>
          <textarea
            rows={10}
            value={form.content}
            onChange={update('content')}
            placeholder="Write your story here…"
          />
        </label>

        {error && <p className="form-error">{error}</p>}

        <div className="form-actions">
          <button type="submit" className="btn-primary">Publish</button>
        </div>
      </form>
    </div>
  )
}
