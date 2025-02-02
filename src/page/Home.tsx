
import NavBarre from "../component/NavBarre"
import { DateFilterType } from "../GetData"
import "../assets/style/styleIndex.css"
import ContainerImageAnimation from "../component/ContainerImageAnime"
import Footer from "../component/Footer"

const Home =({}) => {

    return(
        <>
            <NavBarre strTitre="Accueil" />
            <div className="content">
                <h1>Bienvenue dans notre espace dédié au bien-être et à la reconnexion à soi.</h1>
                <p>Prenez une pause dans le tourbillon de la vie quotidienne et découvrez un refuge de sérénité où méditation, écoute et partage sont au cœur de nos valeurs. 
                    Nous vous invitons à explorer des pratiques douces pour harmoniser votre esprit et votre corps, tout en créant des liens authentiques avec vous-même et les autres.
                    Nos événements, tels que les tentes rouges, célèbrent la force et la sagesse féminine dans un cadre bienveillant et chaleureux. 
                    Laissez-vous guider sur ce chemin d’épanouissement personnel et collectif, et vivez une expérience profondément nourrissante.</p>
                    
                <a href={`/evenement/${DateFilterType.PAST}`}><ContainerImageAnimation src="./event_passe.webp" title="Voir les évènement passé" alt="Image"/></a>
                <a href={`/evenement/${DateFilterType.PAST}`}><ContainerImageAnimation src="./event_futur.webp" title="Voir les évènement future" alt="Image"/></a>
            </div>
            <Footer />
        </>
    )

}

export default Home