import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Main from "./Main";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/redux/userInfoSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import Error from "./Error";

const Body = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // const {uid, email, displayName, photoURL} = user;
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Main />
    },
    {
      path: "/error",
      element: <Error />
    }
  ]);

  return(
    <RouterProvider router={appRouter} />
  )
}

export default Body;