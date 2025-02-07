
import NavBarre from "../component/NavBarre"
import "../assets/style/styleIndex.css"
import "../assets/style/styleHome.css"
import Footer from "../component/Footer"
import AnimatedOnScroll from "../component/AnimatedScroll"

const Amf =({}) => {

    return(
        <>
            <NavBarre strTitre="AMF" />
            <div className="container">
                <div className="image-container">
                    <AnimatedOnScroll children={<img src="./amf_logo.webp"/>} time={0.1} repeat={false}/>
                </div>
                <div className="content-home">
                    <h3 className="subtitle">AMF Cosplay</h3>
                    <h1 className="title">Association Multiunivers Fantasy Cosplay</h1>
                    <p className="description">
                    Une association passionnés autour de la culture cosplay dans une ambiance conviviale et joyeuse. 
                    AMF Cosplay regroupe une diversité de talents, notamment des cosplayers, photographes, musiciens, vidéastes, créateurs de contenu et dessinateurs. 
                    Elle participe également à divers événements, tels que le Comic Con France, où elle organise des concours de cosplay adaptés à tous les niveaux.
                    </p>
                    <a href="https://www.instagram.com/a.m.f.cosplay?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="cta-link">Voir la page Instagram</a>
                </div>
            </div>
            <div className="container gray">
                <div className="content-home">
                    <h3 className="subtitle">AMF Cosplay & Ujuicy</h3>
                    <h1 className="title">Une collaboration</h1>
                    <p className="description">
                        Nous sommes en collaboration avec l'AMF Cosplay, avec laquelle nous avons l'opportunité de produire des prestations sur scène. 
                        Un grand merci au président d'avoir accepter notre collaboration !!
                    </p>
                </div>
                <div className="image-container">
                    <AnimatedOnScroll children={<img src="./amf_collab.jpg"/>} time={0.1} repeat={false}/>
                </div>
            </div>

            <Footer />
        </>
    )

}

export default Amf