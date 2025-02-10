
import NavBarre from "../component/NavBarre"
import "../assets/style/styleIndex.css"
import "../assets/style/styleHome.css"
import Footer from "../component/Footer"
import AnimatedOnScroll from "../component/AnimatedScroll"
import Card from "../component/Card"

const Home =({}) => {
    const dataUser = [
        { 
            prenom: 'Brandon', 
            imgs: "/suki.jpg",
            content: "Je vie pour le sport et je kiffe voir notre progression après chaque training.",
            time: 0.1
        },
        { 
            prenom: 'Arthur', 
            imgs: "/arthur.jpg",
            content: "Responsable des placements, je serai la pour vous donner des conseils.",
            time: 0.2
        },
    ]

    return(
        <>
            <NavBarre strTitre="Accueil" />
            <div className="container">
                <div className="content-home">
                <h3 className="subtitle">Ujuicy</h3>
                <h1 className="title">Un petit groupe passionné</h1>
                <p className="description">
                    Nous, c’est Ujuicy, une équipe soudée par la passion de la K-pop ! On n’est peut-être pas des pros, mais on donne tout pour des prestations carrées, fun et pleines d’énergie.
                    Ensemble, on danse, on progresse et surtout, on s’éclate !
                    On se retrouve très vite pour de nouvelles performances !
                </p>
                <a href="https://www.instagram.com/ujuicy.real?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="cta-link">Notre page intagram</a>
                </div>
                <div className="image-container">
                <AnimatedOnScroll children={<img src="./home_img_groupe.jpg"/>} time={0.1} repeat={false}/>
                </div>
                

            </div>
            <div className="section">
                <h2 className="section-title">Notre Équipe</h2>
                <div className="card-container">
                    {dataUser.map((user) => (
                        <AnimatedOnScroll children={<Card src={user.imgs} titre={user.prenom} content={user.content}/>} time={user.time} repeat={false}/>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    )

}

export default Home