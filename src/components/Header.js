import { useContext, useState } from "react";
import { LOGO_URL } from "../utilis/constant";
import { Link } from "react-router-dom";
import checkOnlineStatus from "../utilis/helper/checkOnlineStatus";
import LoginContext from "../utilis/helper/LoginContext";
import { useSelector } from "react-redux";
// import styled from 'styled-components'; // fetching the styled component
// import styled from "styled-components";

const Header = () => {

  const [loginBtn, setLoginBtn] = useState("Login");

  const { userName } = useContext(LoginContext);

  const cartItems =  useSelector((store) => store.ourcart.items);
  return (
    <>
      <h1 className="items-center p-4 font-bold text-center bg-green-50 border-b-1"> RY Food Delivery App</h1>  
      <header className="flex justify-between bg-green-50 shadow-lg mb-2 px-2">
        <Link to="/"><img className="w-40 h-40" src={LOGO_URL} alt="Own Delivery App" /></Link>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="m-1 p-1">Online Status: {checkOnlineStatus() ? "Online" : "Offline"} |</li>
            <li className="m-1 p-1"><Link to="/">Home |</Link></li>
            <li className="m-1 p-1"><Link to="/about">About |</Link></li>
            <li className="m-1 p-1"><Link to="/contact">Contact |</Link></li>
            <li className="m-1 p-1"><Link to="/grocery">Grocery |</Link></li>
            <li className="m-1 p-1"><Link to="/cart">Cart ({cartItems.length} items) |</Link></li>
            <button className="loginStatu" onClick={() => {
              loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
            }}>{loginBtn} |</button>
            <li className="m-1 p-1">UserLogin context: {userName}</li>
          </ul>
            {/* <Button />  */}
        </div>
      </header>
    </>
  )
}

export default Header;