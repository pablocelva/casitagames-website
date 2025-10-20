import Footer from '../components/Footer'
import { FaSteam, FaItchIo } from 'react-icons/fa'

export default function YutoriGame() {
    return (
        <section className="content">
            <img src="https://raw.githubusercontent.com/pablocelva/casitagames-website/refs/heads/main/src/assets/img/yutori/yutori1.png" alt="Yutori" className='ojito-image' />
            <div className="ojito-section">
                <h1>Yutori</h1>
                <div className="game-desc-grid">
                    <div className="game-about">
                        <h4>About</h4>
                        <p>Yutori pone a los jugadores en el rol de recolectar semillas para un bello ser en el espacio en un contexto surrealista y musical.</p>
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
                        {/* <a href="https://store.steampowered.com" target="_blank" rel="noreferrer">
                            <FaSteam className="inline w-6 h-6 hover:text-gray-400" />
                        </a> */}
                        <a href="https://casita-games.itch.io/yutori" target="_blank" rel="noreferrer">
                            <FaItchIo className="inline w-6 h-6 hover:text-red-400" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="ojito-galeria">
                <img src="https://raw.githubusercontent.com/pablocelva/casitagames-website/refs/heads/main/src/assets/img/yutori/yutori7.png" alt="Yutori" className='game-image' />
                <img src="https://raw.githubusercontent.com/pablocelva/casitagames-website/refs/heads/main/src/assets/img/yutori/yutori5.png" alt="Yutori" className='game-image' />
                <img src="https://raw.githubusercontent.com/pablocelva/casitagames-website/refs/heads/main/src/assets/img/yutori/yutori2.png" alt="Yutori" className='game-image' />
                <img src="https://raw.githubusercontent.com/pablocelva/casitagames-website/refs/heads/main/src/assets/img/yutori/yutori3.png" alt="Yutori" className='game-image' />
                <img src="https://raw.githubusercontent.com/pablocelva/casitagames-website/refs/heads/main/src/assets/img/yutori/yutori6.png" alt="Yutori" className='game-image' />
                <img src="https://raw.githubusercontent.com/pablocelva/casitagames-website/refs/heads/main/src/assets/img/yutori/yutori4.png" alt="Yutori" className='game-image' />
                
            </div>
            <Footer />
        </section>
    )
}