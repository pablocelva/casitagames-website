import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const games = [
    {
        title: 'Ojito',
        description: 'Un juego visual donde entrenas tu percepción y memoria.',
        image: 'https://raw.githubusercontent.com/pablocelva/casitagames-website/refs/heads/main/src/assets/img/ojito/ojitoteam_450x200px.png',
        link: '/ojito',
    },
    {
        title: 'Yutori',
        description: 'Explora la calma en este juego de puzzles minimalistas.',
        image: 'https://raw.githubusercontent.com/pablocelva/casitagames-website/refs/heads/main/src/assets/img/yutori/yutori1.png',
        link: '/yutori',
    },
];

export default function Games() {
    return (
        <section className="content-short">
            {/* <h1>GAMES</h1> */}
            {/* <h3>OJITO</h3> */}
            {/* <h3>YUTORI</h3> */}
            {/* <h3>Parappita Sim</h3> */}
            {/* <section className="games-section"> */}
            <h1>GAMES</h1>
            <div className="games-grid">
                {games.map((game) => (
                <div className="game-card" key={game.title}>
                    <img src={game.image} alt={game.title} className='game-image' />
                    <div className="card-content">
                    <h2>{game.title}</h2>
                    <p>{game.description}</p>
                    <button>
                        <Link to={game.link} >Ver más</Link>
                        {/* <a href={game.link}>Ver más</a> */}
                    </button>
                    </div>
                </div>
                ))}
            </div>
            {/* </section> */}
            {/* <iframe
                frameborder="0"
                src="https://play.unity.com/en/games/8d764a63-55cc-4ee6-b8fe-af229f550cb6/flappybird-build"
                width="80%"
                height="300px"
                ></iframe> */}
            {/* <Footer /> */}
        </section>
        
    )
}