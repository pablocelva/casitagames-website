import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const handleLinkClick = () => setOpen(false)

    return (
        <nav className="navbar">
                <div className="nav-logos">
                    <Link to="/" onClick={handleLinkClick}>
                        <img src="https://www.casitagames.com/img/logo_casita_games.svg" alt="Casita Games Logo"/>
                    </Link>
                    <button className="hamburger" onClick={() => setOpen(!open)}>
                        ☰
                    </button>
                </div>
                <ul className={`nav-links ${open ? 'open' : ''}`}>
                    <li><Link to="/games" onClick={handleLinkClick}>Games</Link></li>
                    <li><Link to="/blog" onClick={handleLinkClick}>Blog</Link></li>
                    <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
                    <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
                </ul>
        </nav>
    )
}