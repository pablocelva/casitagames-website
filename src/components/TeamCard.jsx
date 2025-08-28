import { 
    FaFacebook, 
    FaInstagram, 
    FaSteam, 
    FaDiscord, 
    FaItchIo, 
    FaTwitter, 
    FaYoutube 
} from 'react-icons/fa'

export default function TeamCard() {
    return (
        <div className="team-card">
            <img src="./src/assets/casita_games_logo.png" alt="Team" className='team-img' />
            <div className="team-title">
                <h2>Valeria</h2>
                <h4>Developer/Game Designer</h4>
                {/* <p>Developer/Game Designer</p> */}
            </div>
            <p className="team-bio">Valeria is a passionate and creative individual who is dedicated to creating the best possible gaming experience for our players.</p>
            <div className="team-social">
                <a href="https://itch.io" className='logos' target="_blank" rel="noreferrer">
                    <FaItchIo className="inline w-6 h-6 hover:text-red-400" />
                </a>
                <a href="https://youtube.com" className='logos' target="_blank" rel="noreferrer">
                    <FaYoutube className="inline w-6 h-6 hover:text-red-400" />
                </a>
                <a href="https://twitter.com" className='logos' target="_blank" rel="noreferrer">
                    <FaTwitter className="inline w-6 h-6 hover:text-blue-400" />
                </a>
                <a href="https://instagram.com" className='logos' target="_blank" rel="noreferrer">
                    <FaInstagram className="inline w-6 h-6 hover:text-pink-400" />
                </a>
            </div>
        </div>
    )
}