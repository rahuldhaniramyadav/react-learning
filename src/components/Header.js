import { LOGO_URL } from "../utilis/constant";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={LOGO_URL} alt="Own Delivery App" />
      <h1> RY Food Delivery App</h1>  
      <nav>
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
        </ul>
      </nav>
    </header>
  )
}


export default Header;