import UserFun from "./UserFun";
import UserClass from "./UserClass";

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