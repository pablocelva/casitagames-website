import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <section className="content">
            {/* <img src="src/assets/casita_gamesTXT_logo_450x48px.png" alt="Logo Casita Games" className='casita-logo-text' /> */}
            <h1>
                <img src="https://raw.githubusercontent.com/pablocelva/casitagames-website/refs/heads/main/src/assets/casita_gamesTXT_logo_450x48px.png" alt="Logo Casita Games" className='casita-logo-text' />
                {/* CASITA Games */}
            </h1>
            <img src="https://raw.githubusercontent.com/pablocelva/casitagames-website/refs/heads/main/src/assets/casita_games_logo.png" alt="Ojito Game" className='casita-logo' />
            <p>Welcome to the home page of CASITA Games</p>
            
            <div className="juegos">
                <h3>Our Games</h3>
                <p>OJITO (Demo)</p>
                <button>
                    <Link to="/games">Read More</Link>
                </button>
                {/* <p>FlappyBirdo (Demo)</p>
                <button>
                    <Link to="/games">Read More</Link>
                </button> */}
            </div>
            {/* <div className="noticias">
                <h3>Latest News</h3>
                <p>OJITO Demo in development</p>
                <button>
                    <Link to="/blog">Read More</Link>
                </button>
            </div> */}
            <div className="about">
                <h3>About Us</h3>
                <p>We are a team of passionate and creative individuals who are dedicated to creating the best possible gaming experience for our players.</p>
                <button>
                    <Link to="/about">Read More</Link>
                </button>
            </div>
            {/* <Footer /> */}
        </section>
    )
}