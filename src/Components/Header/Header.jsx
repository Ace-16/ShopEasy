import { Link } from "react-router-dom";

import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";

const Header = () => {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to={"/"}>
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchIn" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={!user && "/login"}
        >
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {user ? user.email : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__optionBasket">
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={"/checkout"}
          >
            <ShoppingCartOutlinedIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
