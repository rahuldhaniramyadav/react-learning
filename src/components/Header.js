import { useState } from "react";
import { LOGO_URL } from "../utilis/constant";
import { Link } from "react-router-dom";
import checkOnlineStatus from "../utilis/helper/checkOnlineStatus";

const Header = () => {

  const [loginBtn, setLoginBtn] = useState("Login");

  return (
    <header className="header">
      <Link to="/"><img className="logo" src={LOGO_URL} alt="Own Delivery App" /></Link>
      <h1> RY Food Delivery App</h1>  
      {/* <nav>
        <ul className="menu-items">
          <li>
            <a href="#">HTML</a> |
          </li>
          <li>
            <a href="#">About Us</a> |
          </li>
          <li>
            <a href="#">Know More</a> |
          </li>
          <li>
            <a href="#">Login/Logout</a>
          </li>
          <li onClick={() => {
            loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
          }}>{loginBtn}</li>
        </ul>
      </nav> */}
       <div className="nav-items">
        <ul>
          <li>Online Status: {checkOnlineStatus() ? "Online" : "Offline"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><a href="/contact">Contact us with anchor link</a></li> {/** it is used to show this anchoring is reloading the webpage but LINK component is reredering the component  */}
          <li>Cart</li>
          <button className="loginStatu" onClick={() => {
            loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
          }}>{loginBtn}</button>
        </ul>
      </div>
    </header>
  )
}

export default Header;