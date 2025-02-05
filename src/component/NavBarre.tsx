import { useState } from 'react';
import '../assets/style/styleNavBarre.css'

interface Props{
  strTitre:string
}

const NavBarre:React.FC<Props> = ({strTitre}) => {
  const [isOpen, setIsOpen] = useState(false);

    return (
      <header className="header">
        <nav className="navbar">
          <div className="burger-menu" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </div>
          <ul className={isOpen ? "nav-links open" : "nav-links"}>
            <li><a href="/">Accueil</a></li>
            <li><a href="/prestation/passe">Nos prestation passé</a></li>
            <li><a href="/prestation/futur">Nos prestation à venir</a></li>
            <li><a href="/a-propos">À propos de nous</a></li>
            <li><a href="/amf">AMF</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <h1>Bienvenue à vous</h1>
        <p>{strTitre}</p>
        <video autoPlay muted loop id="myVideo" width={"100%"}  height={"100%"}>
        <source src="./public/video_bk.mp4" type="video/mp4"></source></video>
        <div className="content-video">
          <h1>Ujuicy</h1>
          <p>La naissance d'un groupe passionné</p>
        </div>
      </header>
    );
  }

  export default NavBarre;