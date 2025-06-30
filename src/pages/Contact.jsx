export default function Contact() {
    return (
        <section className="content">

            <h1>Contact</h1>
            <h3>Contact Us</h3>
            <p>If you have any questions or feedback, please feel free to contact us at <a href="mailto:contact@casitagames.com">contact@casitagames.com</a></p>
            <p>We are always happy to hear from you and are here to help!</p>
            <p>Thank you for choosing Casita Games!</p>
            <br />
            <div>
                <h3>Follow Casita Games!</h3>
                <p>Follow us on social media to stay up to date with the latest news and updates from Casita Games.</p>
                {/* <br /> */}
                <ul className="logos-contact">
                    <li><a href="#">Discord</a></li>
                    <li><a href="#">Steam</a></li>
                    <li><a href="#">Itch.io</a></li>
                </ul>
                <ul className="logos-contact">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Youtube</a></li>
                </ul>
            </div>
        </section>
    )
}