import userIcon from "../utils/images/user-icon.png";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const Header = () => {

  const user = auth.currentUser;
  const navigate = useNavigate();

  const handleSignout = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      console.log(error);
    });    
  }

  return(
    <div className="flex justify-between">
      <img className="w-52 absolute bg-linear-to-b from-black" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="RY Logo" />
      {user && <div className="absolute right-0 text-white flex">
        {/* <img className="w-16 bg-linear-to-b from-black" src={userIcon} alt="User Login icon" /> */}
        <img className="w-16 bg-linear-to-b from-black" src={user.photoURL} alt="User Login icon" />
        user
        <button className="font-bold m-1 p-2 cursor-pointer" onClick={handleSignout}>Sign Out</button>
      </div> }
    </div>
  )
}

export default Header;