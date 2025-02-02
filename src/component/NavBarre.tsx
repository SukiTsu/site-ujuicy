import { useState } from 'react';
import '../assets/style/styleNavBarre.css'
import { DateFilterType } from "../GetData"

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
            <li><a href={`/evenement/passe`}>Événements passés</a></li>
            <li><a href={`/evenement/futur`}>Événements à venir</a></li>
            <li><a href="/a-propos">À propos de moi</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <h1>Bienvenue à vous</h1>
        <p>{strTitre}</p>
      </header>
    );
  }

  export default NavBarre;