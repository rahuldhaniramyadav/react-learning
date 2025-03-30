import { useState } from "react";
import { LOGO_URL } from "../utilis/constant";

const Header = () => {

  const [loginBtn, setLoginBtn] = useState("Login");

  return (
    <header className="header">
      <img className="logo" src={LOGO_URL} alt="Own Delivery App" />
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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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