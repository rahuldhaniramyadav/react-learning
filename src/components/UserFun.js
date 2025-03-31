import { useState } from "react";

const UserFun = ({name, location}) => {

  const [count] = useState(0);
  const [count2] = useState(2);


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