import { useRouteError } from "react-router-dom";

const NotFound = () => {

  const err = useRouteError();
  // console.log(err); // it is not working i think due to latest version of the react-router-dom to react-router and it might not support

  return(
    <div>
      <h1>NotFound</h1>
    </div>
  )
}

export default NotFound;