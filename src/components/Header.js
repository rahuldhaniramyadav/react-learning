import userIcon from "../utils/images/user-icon.png";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/redux/userInfoSlice";
import { useEffect } from "react";
import { LOGO } from "../utils/constant";

const Header = () => {

  const dispatch = useDispatch();
  const naviga =  useNavigate();

  const handleSignout = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      console.log(error);
    });    
  }

  useEffect(() => {
    const unscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL
        }))
        naviga("/browse");
      } else {
        dispatch(removeUser());
        naviga("/");
      }
    });

    return () => {
      // clearing the event when component is unmount
      return unscribe();
    }
  }, []);

  const user = useSelector((store) => store.user);

  return(
    <div className="flex justify-between absolute w-screen bg-gradient-to-b from-black z-10 px-8">
      <img className="w-52 absolute" src={LOGO} alt="RY Logo" />
      {user && <div className="absolute right-0 text-white flex">
        {/* <img className="w-16 bg-linear-to-b from-black" src={userIcon} alt="User Login icon" /> */}
        <img className="w-16 bg-linear-to-b from-black" src={user.photoURL} alt="User Login icon" />
        <button className="font-bold m-1 p-2 cursor-pointer bg-amber-200 text-black" onClick={handleSignout}>Sign Out</button>
      </div> }
    </div>
  )
}

export default Header;