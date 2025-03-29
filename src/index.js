import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Main from "./components/Main";

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

root.render(<FoodLayout />);