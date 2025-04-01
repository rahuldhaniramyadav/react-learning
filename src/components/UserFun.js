import { useEffect, useState } from "react";

const UserFun = ({name, location}) => {

  const [count] = useState(0);
  const [count2] = useState(2);

  //why we can't use aync in useEffect - because it is not a promise and it will not retrun promise it, useEffect must either be undefined or a cleanup function, but not a promise so we can't use // aync useEffect()
  useEffect(() => {
    const a = setInterval(() => {
      // console.log("A");
    }, 5000);

    return() => { // this is used to unmount the component
      console.log("console log A removed from timer");
      clearInterval(a)
    }
  }, [])

  return(
    <div className="function-based">
      <div>
        <div>Count : {count}</div>
        <div>Count2 : {count2}</div>
      </div>
      <h1>{name}</h1>
      <h2>{location}</h2>
    </div>
  );
}

export default UserFun;