import TeamCard from '../components/TeamCard'
import Footer from '../components/Footer'
import { FaItchIo, FaYoutube, FaTwitter, FaInstagram, FaSoundcloud } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <section className="content-short">
            <h1>About</h1>
            <div className="about">
                <div className="about-logo">
                        <img src="https://raw.githubusercontent.com/pablocelva/casitagames-website/refs/heads/main/src/assets/casita_games_logo.png" alt="Ojito Game" className='casita-logo' />
                        <h1>CASITA Games</h1>
                    </div>
                    <div className="about-desc">
                        <p>Casita Games es un estudio independiente de desarrollo de videojuegos, creado por una familia de personas sensibles y creativas.</p>
                        <p>Somos un equipo que se dedica a la creación de juegos que reflejen la diversidad cultural y sensible de nuestra comunidad, con enfoque en la creatividad, el humor, la diversidad, la poesía y el surrealismo.</p>
                        <Link to="/games">
                            <button className='games-button'>Nuestros Juegos</button>
                        </Link>
                    </div>    
            </div>
            <h2 className='title-h2'>Equipo</h2>
            <div className="team-galeria">
                <div className="team-card">
                    <img src="./src/assets/casita_games_logo.png" alt="Team" className='team-img' />
                    <div className="team-title">
                        <h2>Valeria Hernández</h2>
                        <h4>Developer / Game Designer</h4>
                        <h4>Art Director / Composer</h4>
                    </div>
                    <p className="team-bio">Valeria is a passionate and creative individual who is dedicated to creating the best possible gaming experience for our players.</p>
                    <div className="team-social">
                        <a href="https://inpar.itch.io/" className='logos' target="_blank" rel="noreferrer">
                            <FaItchIo className="inline w-6 h-6 hover:text-red-400" />
                        </a>
                        <a href="https://soundcloud.com/inpar" className='logos' target="_blank" rel="noreferrer">
                            <FaSoundcloud className="inline w-6 h-6 hover:text-pink-400" />
                        </a>
                        <a href="https://youtube.com/@valeriahernan" className='logos' target="_blank" rel="noreferrer">
                            <FaYoutube className="inline w-6 h-6 hover:text-red-400" />
                        </a>
                        <a href="https://instagram.com/inpar_" className='logos' target="_blank" rel="noreferrer">
                            <FaInstagram className="inline w-6 h-6 hover:text-pink-400" />
                        </a>
                    </div>
                </div>
                <div className="team-card">
                    <img src="./src/assets/casita_games_logo.png" alt="Team" className='team-img' />
                    <div className="team-title">
                        <h2>Alexia Bobadilla</h2>
                        <h4>Animator / Concept Artist</h4>
                    </div>
                    <p className="team-bio">Alexia is a passionate and creative individual who is dedicated to creating the best possible gaming experience for our players.</p>
                    <a href="https://alexiabobadilla.straw.page/" target='blank' rel="noreferrer">Website</a>
                    <div className="team-social">
                        <a href="https://youtube.com/@AlexiaBobadilla" className='logos' target="_blank" rel="noreferrer">
                            <FaYoutube className="inline w-6 h-6 hover:text-red-400" />
                        </a>
                        <a href="https://soundcloud.com/alexia-bobadilla" className='logos' target="_blank" rel="noreferrer">
                            <FaSoundcloud className="inline w-6 h-6 hover:text-pink-400" />
                        </a>
                        <a href="https://instagram.com/alexia_bobadilla" className='logos' target="_blank" rel="noreferrer">
                            <FaInstagram className="inline w-6 h-6 hover:text-pink-400" />
                        </a>
                    </div>
                </div>
                <div className="team-card">
                    <img src="./src/assets/casita_games_logo.png" alt="Team" className='team-img' />
                    <div className="team-title">
                        <h2>Pablo Lambert</h2>
                        <h4>Composer / Developer / UX</h4>
                    </div>
                    <p className="team-bio">Pablo is a passionate and creative individual who is dedicated to creating the best possible gaming experience for our players.</p>
                    <a href="https://pablocelva.github.io/celvaprod-react-three-fiber/" target='blank' rel="noreferrer">Website</a>
                    <div className="team-social">
                        <a href="https://pablocelva.itch.io/" className='logos' target="_blank" rel="noreferrer">
                            <FaItchIo className="inline w-6 h-6 hover:text-red-400" />
                        </a>
                        <a href="https://soundcloud.com/pablo-lambert-espinoza" className='logos' target="_blank" rel="noreferrer">
                            <FaSoundcloud className="inline w-6 h-6 hover:text-pink-400" />
                        </a>
                        <a href="https://youtube.com/@CELVAPROD" className='logos' target="_blank" rel="noreferrer">
                            <FaYoutube className="inline w-6 h-6 hover:text-red-400" />
                        </a>
                        <a href="https://instagram.com/celvanegra" className='logos' target="_blank" rel="noreferrer">
                            <FaInstagram className="inline w-6 h-6 hover:text-pink-400" />
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}