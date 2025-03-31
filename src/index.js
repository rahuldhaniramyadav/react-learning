import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Main from "./components/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound"

const root = ReactDOM.createRoot(document.getElementById('root'));

// Before staring any development first create plan how it will look like, what it have and how it will intract and why it is neede

// Now we are building food livery app so we are creating a plan based on that

// /Config Driven UI

const FoodLayout = () => {
  return(
    <>
      <Header />
      <Main />
    </>
  )
}

// the below code will work when we manually put the path in base url like here for about us we have to use it http://localhost:1234/about 
const routerProv = createBrowserRouter([
  {
    path: "/",
    element: <FoodLayout />,
    errorElement: <NotFound /> // it is used to show the error
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  // if we are not using start(*) then any random url will show error 
  // http://localhost:1234/mmm // listenToRuntimeErrors.js:137 Error handled by React Router default ErrorBoundary
  {
    path: "*",
    element: <NotFound />
  }
])


root.render(<RouterProvider router={routerProv} />);