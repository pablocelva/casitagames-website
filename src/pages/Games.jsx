
const games = [
    {
        title: 'Ojito',
        description: 'Un juego visual donde entrenas tu percepción y memoria.',
        image: '/src/assets/img/bkg_desktopstuff_.png',
        link: '#',
    },
    {
        title: 'Yutori',
        description: 'Explora la calma en este juego de puzzles minimalistas.',
        image: '/src/assets/img/bkg_desktopstuff_.png',
        link: '#',
    },
];

export default function Games() {
    return (
        <section className="content-short">
            {/* <h1>GAMES</h1> */}
            {/* <h3>OJITO</h3> */}
            {/* <h3>YUTORI</h3> */}
            {/* <h3>Parappita Sim</h3> */}
            <section className="games-section">
                <h1>GAMES</h1>
                <div className="games-grid">
                    {games.map((game) => (
                    <div className="game-card" key={game.title}>
                        <img src={game.image} alt={game.title} />
                        <div className="card-content">
                        <h2>{game.title}</h2>
                        <p>{game.description}</p>
                        <button>
                            <a href={game.link}>Ver más</a>
                        </button>
                        </div>
                    </div>
                    ))}
                </div>
            </section>
            {/* <iframe
                frameborder="0"
                src="https://play.unity.com/en/games/8d764a63-55cc-4ee6-b8fe-af229f550cb6/flappybird-build"
                width="80%"
                height="300px"
                ></iframe> */}
        </section>
        
    )
}