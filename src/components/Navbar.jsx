import { Link } from 'react-router-dom'
import { useState } from 'react'
import { 
    FaFacebook, 
    FaInstagram, 
    FaSteam, 
    FaDiscord, 
    FaItchIo, 
    FaTwitter, 
    FaYoutube 
} from 'react-icons/fa'

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
                <ul className="nav-links open">
                    <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
                    <li><Link to="/games" onClick={handleLinkClick}>Games</Link></li>
                    {/* <li><Link to="/blog" onClick={handleLinkClick}>Blog</Link></li> */}
                    <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
                    <li><Link to="/contact" onClick={handleLinkClick}>Contacto</Link></li>
                </ul>
                <div className="logos">
                    {/* <a href="https://store.steampowered.com" target="_blank" rel="noreferrer">
                        <FaSteam className="inline w-6 h-6 hover:text-gray-400" />
                    </a> */}
                    <a href="https://casita-games.itch.io/" target="_blank" rel="noreferrer">
                        <FaItchIo className="inline w-6 h-6 hover:text-red-400" />
                    </a>
                    {/* <a href="https://discord.gg" target="_blank" rel="noreferrer">
                        <FaDiscord className="inline w-6 h-6 hover:text-indigo-400" />
                    </a> */}
                    <a href="https://youtube.com/@CasitaGames" target="_blank" rel="noreferrer">
                        <FaYoutube className="inline w-6 h-6 hover:text-red-400" />
                    </a>
                    <a href="https://instagram.com/casita_games" target="_blank" rel="noreferrer">
                        <FaInstagram className="inline w-6 h-6 hover:text-pink-400" />
                    </a>
                    {/* <a href="https://twitter.com" target="_blank" rel="noreferrer">
                        <FaTwitter className="inline w-6 h-6 hover:text-blue-400" />
                    </a> */}
                    {/* <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <FaFacebook className="inline w-6 h-6 hover:text-blue-400" />
                    </a> */}
                </div>
            </ul>
        </nav>
    )
}