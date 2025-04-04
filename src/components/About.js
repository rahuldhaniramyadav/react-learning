import UserFun from "./UserFun";
import UserClass from "./UserClass";
import "../utilis/about.module.css"; // need to check how we can import css file for the single component
// import { Component } from "react"; // it shoudl work but it is not working
import React from "react";
// import NewUserClass from "./NewUserClass";
// import { Helmet } from 'react-helmet'; // using to check can we modify the head element

//change the About to class based component from function based
class About extends React.Component {
  // whever class instance is created it will trigger 
  constructor(prop) {
    super(prop);
    console.log("Parent Constructor");
  }

  // At the end componentDidMount but here we have child component to load the child didmount will be called first and than parent
  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  render() {
    console.log("Parent Render");
    return(
      <div className="w-[271px]">
        {/* <Helmet>
          <title>My Dynamic Page Title</title>
          <meta name="description" content="This is a about us of my page added by Helmet component" />
        </Helmet> */}
        <h1>About us </h1>
        <UserFun name={" Function "} location={" Fucntion INDIA  "} />
        {/* The dom manipulation will be happend on batches once the contructor, render method of class component is called */}
        <UserClass name={" R "} location={" Class INDIA 1 "} />
        {/* <UserClass name={" Y "} location={" Class INDIA 2 "} />
        <NewUserClass /> */}
      </div>
    )
  }
}

export default About;