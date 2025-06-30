export default function Footer() {
    return (
        <footer className="footer">
            {/* <div className="col-md-4">
                <h3>About Us</h3>
                <p>We are a team of passionate and creative individuals who are dedicated to creating the best possible gaming experience for our players.</p>
            </div> */}
            {/* <div className="col-md-4">
                <h3>Our Mission</h3>
                <p>Our mission is to provide the best possible gaming experience for our players by offering high-quality games, excellent customer service, and a welcoming community.</p>
            </div> */}
            {/* <h3>Contact Us</h3> */}
            <a className="navbar-brand" href="#">
                    <img src="https://www.casitagames.com/img/logo_casita_games.svg" alt="Casita Games Logo"/>
            </a>
            <ul className="logos">
                <li><a href="#">Steam</a></li>
                <li><a href="#">Itch.io</a></li>
                <li><a href="#">Discord</a></li>
            </ul>
            <ul className="logos">
                <li><a href="#">Youtube</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter</a></li>
            </ul>
        </footer>
    )
}