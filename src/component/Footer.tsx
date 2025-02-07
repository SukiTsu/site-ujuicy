import '../assets/style/styleFooter.css'

const Footer =({}) => {
    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Nous suivre</h3>
                    <ul className="social-list">
                        <li><a href="https://www.instagram.com/ujuicy.real?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Instagram</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Nos pages</h3>
                    <ul className="page-list">
                        <li><a href="/" className="link-navbar">Accueil</a></li>
                        <li><a href="/amf" className="link-navbar">AMF</a></li>
                        <li><a href="/evenement-passe" className="link-navbar">Evènement passé</a></li>
                        <li><a href="/evenement-futur" className="link-navbar">Evènement à venir</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Nous contacter</h3>
                    <ul className="contact-list">
                        <li><strong>Nous trouver :</strong>BNF</li>
                        <li><strong>Notre numéro :</strong>???</li>
                        <li><strong>Notre mail :</strong>???</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer