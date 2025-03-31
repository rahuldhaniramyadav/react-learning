import UserFun from "./UserFun";
import UserClass from "./UserClass";
import "../utilis/about.module.css"; // need to check how we can import css file for the single component

const About = () => {
  return(
    <div>
      <h1>About us </h1>
      <UserFun name={" Function "} location={" Fucntion INDIA  "} />
      <UserClass name={" Class "} location={" Class INDIA "} />
    </div>
  )
}

export default About;