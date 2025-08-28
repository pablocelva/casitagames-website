import { 
    FaFacebook, 
    FaInstagram, 
    FaSteam, 
    FaDiscord, 
    FaItchIo, 
    FaTwitter, 
    FaYoutube 
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="footer">
            <Link className='img-logo-nav' to="/" >
                <img src="https://raw.githubusercontent.com/pablocelva/casitagames-website/refs/heads/main/src/assets/casita_games_logo.png" alt="Logo Casita Games" className='casita-logo-navbar' />
                <img src="https://raw.githubusercontent.com/pablocelva/casitagames-website/refs/heads/main/src/assets/casita_gamesTXT_logo_450x48px.png" alt="Logo Casita Games" className='casita-logo' />
            </Link>
            <div className="logos">
                <a href="https://store.steampowered.com" target="_blank" rel="noreferrer">
                    <FaSteam className="inline w-6 h-6 hover:text-gray-400" />
                </a>
                <a href="https://itch.io" target="_blank" rel="noreferrer">
                    <FaItchIo className="inline w-6 h-6 hover:text-red-400" />
                </a>
                <a href="https://discord.gg" target="_blank" rel="noreferrer">
                    <FaDiscord className="inline w-6 h-6 hover:text-indigo-400" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                    <FaYoutube className="inline w-6 h-6 hover:text-red-400" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                    <FaInstagram className="inline w-6 h-6 hover:text-pink-400" />
                </a>
                {/* <a href="https://twitter.com" target="_blank" rel="noreferrer">
                    <FaTwitter className="inline w-6 h-6 hover:text-blue-400" />
                </a> */}
                {/* <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <FaFacebook className="inline w-6 h-6 hover:text-blue-400" />
                </a> */}
            </div>
        </footer>
        
    )
}