import { 
    FaFacebook, 
    FaInstagram, 
    FaSteam, 
    FaDiscord, 
    FaItchIo, 
    FaTwitter, 
    FaYoutube 
} from 'react-icons/fa'

export default function Contact() {
    return (
        <section className="content">

            <h1>Contact</h1>
            <div className="contact-layout">
                <br />
                <h3>Follow Casita Games!</h3>
                <p>Follow us on social media to stay up to date with the latest news and updates from Casita Games.</p>
                <br />
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
                    {/* <a href="https://twitter.com" target="_blank" rel="noreferrer">
                        <FaTwitter className="inline w-6 h-6 hover:text-blue-400" />
                    </a> */}
                    {/* <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <FaFacebook className="inline w-6 h-6 hover:text-blue-400" />
                    </a> */}
                </div>
                <br />
                <h3>Contact Us!</h3>
                <p>If you have any questions or feedback, please feel free to contact us at <a href="mailto:contact@casitagames.com">contact@casitagames.com</a></p>
                <p>We are always happy to hear from you and are here to help!</p>
                <p>Thank you for choosing Casita Games!</p>
            </div>
        </section>
    )
}