import { Link } from "react-router-dom";
import Logo from "../../../public/images/header-logo.png";
import searchIcon from "../../../public/images/icons/searchIcon.png";
import shoppingCart from "../../../public/images/icons/shopping-cart.png";
import "./Header.css";
import { auth } from "../../firebase";
import { useAuth } from "../../context/GlobalState";
const Header = () => {
  const { user, basket } = useAuth();
  const handleAuthantication = () => {
    auth.signOut();
  };
  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src={Logo} alt="logo-img" />
      </Link>
      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <img className="header-searchIcon" src={searchIcon} alt="search-icon" />
      </div>
      <div className="header-nav">
        <Link to={!user && "/login"}>
          <div className="header-option" onClick={handleAuthantication}>
            <span className="header-optionLineOne">
              Hello {user ? `${user.email}` : "Gest"}
            </span>
            <span className="header-optionLineTwo">
              {user ? "Sign out" : "Sign in"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header-option">
            <span className="header-optionLineOne">Returns</span>
            <span className="header-optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header-optionBasket">
            <img src={shoppingCart} />
            <span className="header-optionLineTwo header-basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
