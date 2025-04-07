import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Main from "./Main";

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Main />
    }
  ]);

  return(
    <RouterProvider router={appRouter} />
  )
}

export default Body;