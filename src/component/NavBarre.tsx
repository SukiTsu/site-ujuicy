import '../assets/style/styleNavBarre.css'
import { DateFilterType } from "../GetData"

interface Props{
  strTitre:string
}

const NavBarre:React.FC<Props> = ({strTitre}) => {
    return (
      <header className="header">
        <nav className="navbar">
          <ul>
              <li><a href="/">Accueil</a></li>
              <li><a href={`/evenement/${DateFilterType.PAST}`}>Evènement passé</a></li>
              <li><a href={`/evenement/${DateFilterType.FUTURE}`}>Evènement à venir</a></li>
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