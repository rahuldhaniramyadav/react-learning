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
  console.log(cartItems);
  

//   console.log(styled);
//   const Button = styled.button`
//   color: red;
//   `;

//   const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: #BF4F74;
// `;

  return (
    <>
      <h1 className="items-center p-4 font-bold text-center bg-green-50 border-b-1"> RY Food Delivery App</h1>  
      <header className="flex justify-between bg-green-50 shadow-lg mb-2 px-2">
        <Link to="/"><img className="w-40 h-40" src={LOGO_URL} alt="Own Delivery App" /></Link>
        {/* <Title /> */}
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
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="m-1 p-1">Online Status: {checkOnlineStatus() ? "Online" : "Offline"} |</li>
            <li className="m-1 p-1"><Link to="/">Home |</Link></li>
            <li className="m-1 p-1"><Link to="/about">About |</Link></li>
            <li className="m-1 p-1"><Link to="/contact">Contact |</Link></li>
            <li className="m-1 p-1"><Link to="/grocery">Grocery |</Link></li>
            {/* <li><a href="/contact">Contact us with anchor link</a></li>  */}
            {/** it is used to show this anchoring is reloading the webpage but LINK component is reredering the component  */}
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