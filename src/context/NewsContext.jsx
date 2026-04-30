import { createContext, useContext, useEffect, useState } from 'react'

const NewsContext = createContext(null)
const STORAGE_KEY = 'master_news_articles'

const seedArticles = [
  {
    id: 'seed-1',
    title: 'Global Markets Rally as Tech Sector Surges',
    author: 'Editorial Desk',
    category: 'Business',
    summary: 'Major indices closed at record highs amid strong earnings from technology firms.',
    content:
      'Global stock markets posted significant gains today, led by a strong performance in the technology sector. Analysts attribute the rally to better-than-expected quarterly earnings and renewed investor optimism over AI-driven growth.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(),
  },
  {
    id: 'seed-2',
    title: 'Climate Summit Reaches Historic Agreement',
    author: 'Jane Okafor',
    category: 'World',
    summary: 'World leaders pledged sweeping new measures to curb emissions by the end of the decade.',
    content:
      'After two weeks of intense negotiation, delegates from over 190 countries signed a new climate accord aimed at cutting greenhouse gas emissions in half by 2030. Critics, however, warn that enforcement remains the central challenge.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
  },
  {
    id: 'seed-3',
    title: 'Underdogs Stun Champions in Final Match',
    author: 'Sports Desk',
    category: 'Sports',
    summary: 'A late goal sealed an unexpected victory in last night\'s championship final.',
    content:
      'In a thrilling finish, the underdogs scored deep into stoppage time to defeat the reigning champions 2-1. The victory marks the club\'s first major trophy in over a decade.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
  },
  {
    id: 'seed-4',
    title: 'Breakthrough in Quantum Computing Announced',
    author: 'R. Mehta',
    category: 'Technology',
    summary: 'Researchers demonstrated a new error-correction method that could accelerate practical quantum systems.',
    content:
      'A team of physicists has unveiled a quantum error-correction technique that significantly reduces the resources required to scale up quantum computers, potentially shaving years off the timeline to commercial deployment.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 30).toISOString(),
  },
]

export function NewsProvider({ children }) {
  const [articles, setArticles] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) return JSON.parse(saved)
    } catch {}
    return seedArticles
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(articles))
  }, [articles])

  const addArticle = (data) => {
    const newArticle = {
      ...data,
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      createdAt: new Date().toISOString(),
    }
    setArticles((prev) => [newArticle, ...prev])
    return newArticle
  }

  const getArticle = (id) => articles.find((a) => a.id === id)

  const categories = Array.from(new Set(articles.map((a) => a.category))).sort()

  return (
    <NewsContext.Provider value={{ articles, addArticle, getArticle, categories }}>
      {children}
    </NewsContext.Provider>
  )
}

export function useNews() {
  const ctx = useContext(NewsContext)
  if (!ctx) throw new Error('useNews must be used inside NewsProvider')
  return ctx
}
