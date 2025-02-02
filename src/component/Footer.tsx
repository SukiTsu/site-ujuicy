import '../assets/style/styleFooter.css'
import { DateFilterType } from '../GetData'

const Footer =({}) => {
    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Me suivre</h3>
                    <ul className="social-list">
                        <li><a href="/">LinkedIn</a></li>
                        <li><a href="/">Facebook</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Mes pages</h3>
                    <ul className="page-list">
                        <li><a href="/" className="link-navbar">Accueil</a></li>
                        <li><a href={`/evenement/${DateFilterType.PAST}`}>Evènement passé</a></li>
                        <li><a href={`/evenement/${DateFilterType.FUTURE}`}>Evènement à venir</a></li>
                        <li><a href="/a-propos" className="link-navbar">A propos</a></li>
                        <li><a href="/contact" className="link-navbar">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Me contacter</h3>
                    <ul className="contact-list">
                        <li><strong>Me trouver :</strong>???</li>
                        <li><strong>Mon numéro de téléphone :</strong>06 32 04 09 17</li>
                        <li><strong>Mon mail :</strong>???</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer