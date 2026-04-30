import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  const linkClass = ({ isActive }) => 'nav-link' + (isActive ? ' active' : '')
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand">
          <span className="brand-mark">M</span>
          <span className="brand-name">Master</span>
        </Link>
        <nav className="nav-links">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/latest" className={linkClass}>Latest</NavLink>
          <NavLink to="/categories" className={linkClass}>Categories</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/post" className="nav-cta">Post News</NavLink>
        </nav>
      </div>
    </header>
  )
}
