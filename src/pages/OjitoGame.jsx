import Footer from '../components/Footer'

export default function OjitoGame() {
    return (
        <section className="content">
            <h1>Ojito</h1>
            <img src="https://raw.githubusercontent.com/pablocelva/casitagames-website/refs/heads/main/src/assets/img/ojito/ojitoteam_450x200px.png" alt="Ojito Game" className='game-image' />
            {/* <h3>Ojito</h3> */}
            <p>Ojito is a game where you train your perception and memory.</p>
            <div className="ojito-galeria">
                <img src="https://raw.githubusercontent.com/pablocelva/casitagames-website/refs/heads/main/src/assets/img/ojito/ojito1.png" alt="Ojito Game" className='game-image' />
                <img src="https://raw.githubusercontent.com/pablocelva/casitagames-website/refs/heads/main/src/assets/img/ojito/ojito2.png" alt="Ojito Game" className='game-image' />
                <img src="https://raw.githubusercontent.com/pablocelva/casitagames-website/refs/heads/main/src/assets/img/ojito/ojito3.png" alt="Ojito Game" className='game-image' />
            </div>
            {/* <Footer /> */}
        </section>
    )
}