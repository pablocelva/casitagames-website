import { 
    FaFacebook, 
    FaInstagram, 
    FaSteam, 
    FaDiscord, 
    FaItchIo, 
    FaTwitter, 
    FaYoutube 
} from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="footer">
            <a className="navbar-brand" href="#">
                    <img src="https://www.casitagames.com/img/logo_casita_games.svg" alt="Casita Games Logo"/>
            </a>
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
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                    <FaTwitter className="inline w-6 h-6 hover:text-blue-400" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <FaFacebook className="inline w-6 h-6 hover:text-blue-400" />
                </a>
            </div>
        </footer>
        
    )
}