import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <section className="content">
            <h1>CASITA Games</h1>
            <p>Welcome to the home page of CASITA Games</p>
            
            <div className="juegos">
                <h3>Our Games</h3>
                <p>OJITO (Demo)</p>
                <button>
                    <Link to="/games">Read More</Link>
                </button>
                <p>FlappyBirdo (Demo)</p>
                <button>
                    <Link to="/games">Read More</Link>
                </button>
            </div>
            <div className="noticias">
                <h3>Latest News</h3>
                <p>OJITO Demo in development</p>
                <button>
                    <Link to="/blog">Read More</Link>
                </button>
            </div>
            <div className="about">
                <h3>About Us</h3>
                <p>We are a team of passionate and creative individuals who are dedicated to creating the best possible gaming experience for our players.</p>
                <button>
                    <Link to="/about">Read More</Link>
                </button>
            </div>
            
        </section>
    )
}