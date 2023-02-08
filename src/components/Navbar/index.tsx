import { Link } from "react-router-dom";
import { NavbarStyle } from "./Navbar.styles";
const Navbar: React.FC = () => {
  return (
    <NavbarStyle >
      <div className="container-nav">
        <p>
          Fav<strong>Movies</strong>
        </p>
        <ul>
          <li>
            <Link className="listItems" to="/">
              Top Rated
            </Link>
          </li>
          <li>
            <Link className="listItems" to="/favourites">
              Favourites
            </Link>
          </li>
        </ul>
      </div>
    </NavbarStyle>

  );
};

export default Navbar;
