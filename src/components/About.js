import UserFun from "./UserFun";
import UserClass from "./UserClass";
import "../utilis/about.module.css"; // need to check how we can import css file for the single component
// import { Component } from "react"; // it shoudl work but it is not working
import React from "react";

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
      <div>
        <h1>About us </h1>
        <UserFun name={" Function "} location={" Fucntion INDIA  "} />
        <UserClass name={" Class "} location={" Class INDIA "} />
      </div>
    )
  }
}

export default About;