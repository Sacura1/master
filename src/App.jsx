import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Latest from './pages/Latest.jsx'
import Categories from './pages/Categories.jsx'
import PostNews from './pages/PostNews.jsx'
import About from './pages/About.jsx'
import Article from './pages/Article.jsx'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:category" element={<Categories />} />
          <Route path="/post" element={<PostNews />} />
          <Route path="/about" element={<About />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="*" element={<div className="container"><h2>Page not found</h2></div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
