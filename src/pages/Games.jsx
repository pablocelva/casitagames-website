import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const games = [
    {
        title: 'Ojito',
        image: 'https://github.com/pablocelva/casitagames-website/blob/main/src/assets/img/ojito/OjitoCover.JPG?raw=true',
        link: '/ojito',
    },
    {
        title: 'Yutori',
        image: 'https://github.com/pablocelva/casitagames-website/blob/main/src/assets/img/yutori/YutoriCover.png?raw=true',
        link: '/yutori',
    },
];

export default function Games() {
    return (
        <section className="content-short">
            <h1>GAMES</h1>
            <div className="games-grid">
                {games.map((game) => (
                <div className="game-card" key={game.title}>
                    <Link to={game.link} >
                        <img src={game.image} alt={game.title} className='card-image' />
                    </Link>
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
            <Footer />
        </section>
    )
}