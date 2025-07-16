import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const handleLinkClick = () => setOpen(false)

    return (
        <nav className="navbar">
                <div className="nav-logos">
                    <Link className='img-logo-nav' to="/">
                        <img src="https://raw.githubusercontent.com/pablocelva/casitagames-website/refs/heads/main/src/assets/casita_games_logo.png" alt="Logo Casita Games" className='casita-logo-navbar' />
                        <img src="https://raw.githubusercontent.com/pablocelva/casitagames-website/refs/heads/main/src/assets/casita_gamesTXT_logo_450x48px.png" alt="Logo Casita Games" className='casita-logo' />
                    </Link>
                    <button className="hamburger" onClick={() => setOpen(!open)}>
                        ☰
                    </button>
                </div>
                <ul className={`nav-links ${open ? 'open' : ''}`}>
                    <li><Link to="/games" onClick={handleLinkClick}>Games</Link></li>
                    {/* <li><Link to="/blog" onClick={handleLinkClick}>Blog</Link></li> */}
                    <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
                    <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
                </ul>
        </nav>
    )
}