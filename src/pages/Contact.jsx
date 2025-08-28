import { 
    FaFacebook, 
    FaInstagram, 
    FaSteam, 
    FaDiscord, 
    FaItchIo, 
    FaTwitter, 
    FaYoutube 
} from 'react-icons/fa'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

export default function Contact() {
    return (
        <section className="content">

            <h1>Contacto</h1>
            <div className="contact-layout">
                <br />
                <p>Siguenos en nuestras redes sociales para enterarte más sobre nuestros proyectos! Si deseeas escribirnos rellena en formulario mas abajo o escribenos directamente a <a href="mailto:contact@casitagames.com">contact@casitagames.com</a></p>
                <h3>Follow Casita Games!</h3>
                <div className="logos">
                    <a href="https://store.steampowered.com" target="_blank" rel="noreferrer">
                        <FaSteam className="inline w-6 h-6 hover:text-gray-400" />
                    </a>
                    <a href="https://itch.io" target="_blank" rel="noreferrer">
                        <FaItchIo className="inline w-6 h-6 hover:text-red-400" />
                    </a>
                    <a href="https://discord.gg" target="_blank" rel="noreferrer">
                        <FaDiscord className="inline w-6 h-6 hover:text-indigo-400" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noreferrer">
                        <FaYoutube className="inline w-6 h-6 hover:text-red-400" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <FaInstagram className="inline w-6 h-6 hover:text-pink-400" />
                    </a>
                </div>
                <br />
            </div>
            <ContactForm />
            {/* <img src="https://raw.githubusercontent.com/pablocelva/casitagames-website/refs/heads/main/src/assets/img/bkg_desktopstuff_.png" alt="Tools" className='img-tools' /> */}
            <Footer />
        </section>
    )
}