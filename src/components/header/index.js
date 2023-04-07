import { Link } from "react-router-dom";
import "./estilo.css";

function Header() {
  return (
    <header>
      <Link className="logo" to="/">
        Filmes Em Cartaz
      </Link>
      <Link className="favoritos" to="/favoritos">
        Meus Favoritos
      </Link>
    </header>
  );
}

export default Header;
