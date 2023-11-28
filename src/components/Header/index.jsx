import { Link } from "react-router-dom";
import logo from "../../assets/media/logo.png";

function Header(props) {
  const actif = props.pathname;
  return (
    <header>
      <img src={logo} alt="logo de l'agence"></img>
      <nav>
        <Link to="/" className={`${actif === "/" && "activePage"}`}>
          Accueil
        </Link>
        <Link to="/about" className={`${actif === "/about" && "activePage"}`}>
          A propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
