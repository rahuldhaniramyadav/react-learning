import userIcon from "../utils/images/user-icon.png";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/redux/userInfoSlice";
import { useEffect } from "react";
import { LOGO } from "../utils/constant";
import { setEnableGptPage } from "../utils/redux/GptSlice";
import { LANGUAGE } from "../utils/constant";
import { setLang } from "../utils/redux/langSlice";

const Header = () => {

  const dispatch = useDispatch();
  const naviga =  useNavigate();
  const action = useDispatch();

  const handleSignout = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      console.log(error);
    });    
  }

  const handleGptSearch = () => {
    action(setEnableGptPage())
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

  const slectLanguage = (e) => {
    // console.log(e);
    action(setLang(e.target.value))
  }

  const user = useSelector((store) => store.user);

  const isGptPage = useSelector(state => state.isGpt.enableGptPage);

  return(
    <div className="flex justify-between absolute w-screen bg-gradient-to-b from-black z-50 px-8">
      <img className="w-52" src={LOGO} alt="RY Logo" />
      {user && <div className="absolute right-0 text-white flex mt-5 mr-4">
        {/* <img className="w-16 bg-linear-to-b from-black" src={userIcon} alt="User Login icon" /> */}
        {isGptPage && <select className="bg-gray-700 text-white mx-2 p-4" onClick={slectLanguage}>
        {LANGUAGE.map(l => <option className="p-2" key={l.identifier} value={l.identifier}>{l.name}</option>)}
        </select> }
        <button className="font-bold mx-2 p-4 cursor-pointer bg-purple-600 text-white" onClick={handleGptSearch}>{isGptPage ? "GPT Home Page" : "GPT Search"}</button>
        {user.photoURL && <img className="w-16 mx-2 bg-linear-to-b from-black" src={user.photoURL} alt="User Login icon" /> }
        <button className="font-bold mx-2 p-2 cursor-pointer bg-amber-200 text-black" onClick={handleSignout}>Sign Out</button>
      </div> }
    </div>
  )
}

export default Header;