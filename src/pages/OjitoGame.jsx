import Footer from '../components/Footer'
import { FaSteam, FaItchIo } from 'react-icons/fa'

export default function OjitoGame() {
    return (
        <section className="content">
            <img src="https://github.com/pablocelva/casitagames-website/blob/main/src/assets/img/ojito/OjitoCover.JPG?raw=true" alt="Ojito Game" className='ojito-image' />
            <div className="ojito-section">
                <h1>Ojito</h1>
                <div className="game-desc-grid">
                    <div className="game-about">
                        <h4>About</h4>
                        <p>Ojito pone a los jugadores en el rol del ojo izquierdo de Maya, una mujer de mediana edad atrapada en la monotonía de la vida laboral. Cuando su rostro decide escapar como acto de rebelión, Ojito regresa para guiarnos en un viaje surrealista de recuperación sensorial y emocional.</p>
                        <p>Explora la ciudad ficticia de Villa Sandalia en una aventura narrativa en primera persona con mecánicas point and click. Reconecta con recuerdos de sabores, sonidos, aromas y visiones perdidas, en una experiencia íntima que mezcla humor, poesía y reflexión sobre la salud mental y la belleza de lo cotidiano.</p>
                    </div>
                    <div className="game-info">
                        <h5>Fecha de lanzamiento</h5>
                        <p>En desarrollo</p>
                        <h5>Publisher</h5>
                        <p>Independiente</p>
                        <h5>Rating</h5>
                        <p>Teen (18+) y adultos</p>
                    </div>
                </div>
                <div className="game-store-links">
                    <h2>Store</h2>
                    <div className='logos-game'>
                        <a href="https://store.steampowered.com" target="_blank" rel="noreferrer">
                            <FaSteam className="inline w-6 h-6 hover:text-gray-400" />
                        </a>
                        <a href="https://itch.io" target="_blank" rel="noreferrer">
                            <FaItchIo className="inline w-6 h-6 hover:text-red-400" />
                        </a>
                    </div>
                </div>
                {/* <img src="https://raw.githubusercontent.com/pablocelva/casitagames-website/refs/heads/main/src/assets/img/ojito/ojitoteam_450x200px.png" alt="Ojito Game" className='game-image' /> */}
            </div>
            {/* <h3>Ojito</h3> */}
            {/* <p>Ojito is a game where you train your perception and memory.</p> */}
            <div className="ojito-galeria">
                <img src="https://raw.githubusercontent.com/pablocelva/casitagames-website/refs/heads/main/src/assets/img/ojito/ojito3.png" alt="Ojito Game" className='game-image' />
                <img src="https://raw.githubusercontent.com/pablocelva/casitagames-website/refs/heads/main/src/assets/img/ojito/ojito1.png" alt="Ojito Game" className='game-image' />
                <img src="https://raw.githubusercontent.com/pablocelva/casitagames-website/refs/heads/main/src/assets/img/ojito/ojito2.png" alt="Ojito Game" className='game-image' />
                <img src="https://raw.githubusercontent.com/pablocelva/casitagames-website/refs/heads/main/src/assets/img/ojito/ojito3.png" alt="Ojito Game" className='game-image' />
                <img src="https://raw.githubusercontent.com/pablocelva/casitagames-website/refs/heads/main/src/assets/img/ojito/ojito1.png" alt="Ojito Game" className='game-image' />
                <img src="https://raw.githubusercontent.com/pablocelva/casitagames-website/refs/heads/main/src/assets/img/ojito/ojito2.png" alt="Ojito Game" className='game-image' />
            </div>
            <Footer />
        </section>
    )
}