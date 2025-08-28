import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <section className="content home">
            <div className='carousel'>
                <div className='carousel-card'>
                    <img src="https://github.com/pablocelva/casitagames-website/blob/main/src/assets/img/ojito/OjitoCover.JPG?raw=true" alt="Ojito Game" className='ojito-image' />
                </div>
                <div className='carousel-card'>
                    <img src="https://github.com/pablocelva/casitagames-website/blob/main/src/assets/img/yutori/YutoriCover.png?raw=true" alt="Ojito Game" className='ojito-image' />
                </div>
                <div className='carousel-card'>
                    <img src="https://github.com/pablocelva/casitagames-website/blob/main/src/assets/img/ojito/OjitoCover.JPG?raw=true" alt="Ojito Game" className='ojito-image' />
                </div>
                <div className='carousel-card'>
                    <img src="https://github.com/pablocelva/casitagames-website/blob/main/src/assets/img/yutori/YutoriCover.png?raw=true" alt="Ojito Game" className='ojito-image' />
                </div>
            </div>
            <div className="about">
                <div className="about-logo">
                    <img src="https://raw.githubusercontent.com/pablocelva/casitagames-website/refs/heads/main/src/assets/casita_games_logo.png" alt="Ojito Game" className='casita-logo' />
                    <h1>CASITA Games</h1>
                </div>
                <div className="about-desc">
                    <p>Casita Games es un estudio independiente de desarrollo de videojuegos, creado por una familia de personas sensibles y creativas.</p>
                    <p>Somos un equipo que se dedica a la creación de juegos que reflejen la diversidad cultural y sensible de nuestra comunidad, con enfoque en la creatividad, el humor, la diversidad, la poesía y el surrealismo.</p>
                    <Link to="/games">
                        <button>
                        Nuestros Juegos
                        </button>
                    </Link>
                </div>
            </div>
            {/* <div className="noticias">
                <h3>Latest News</h3>
                <p>OJITO Demo in development</p>
                <button>
                    <Link to="/blog">Read More</Link>
                </button>
            </div> */}
            <Footer />
        </section>
    )
}