import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import arrow_icon from "../../assets/arrow_icon.png";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);
  const handleCurrency = (e) => {
    switch (e.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "pkr": {
        setCurrency({ name: "pkr", symbol: "Rs." });
        break;
      }
      case "inr": {
        setCurrency({ name: "usd", symbol: "Rs." });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };

  return (
    <div className="navbar">
      <Link to={"/"}>
        <img className="logo" src={logo} alt="" />
      </Link>

      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>

        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={handleCurrency}>
          <option value="usd">USD</option>
          <option value="eur">EURO</option>
          <option value="pkr">PKR</option>
        </select>
        <button>
          Sign Up <img src={arrow_icon} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
