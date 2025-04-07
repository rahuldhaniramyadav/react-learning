import { useState } from "react";
import Header from "./Header";

const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true);

  const handleToggel = () => {
    setIsSignIn(!isSignIn);
  }

  return(
      <div className="">
        <Header />
        <img className="" src="https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web/IN-en-20250331-TRIFECTA-perspective_247b6f06-c36d-4dff-a8eb-4013325c3f8e_large.jpg" alt="Body Image" />
        <form className="rounded-2xl absolute left-0 right-0 w-3/12 mx-auto top-20 text-white p-14 bg-black opacity-90">
          <fieldset className="text-white">
            <legend className="my-4 font-bold text-2xl">{isSignIn ? "Sign In": "Sign Up"}</legend>
            {!isSignIn && <input type="name" placeholder="Enter Full Name" className="p-2 my-4 bg-gray-800 w-full" />}
            <input type="email" placeholder="Enter Email" className="p-2 my-4 bg-gray-800 w-full" />
            <input type="password" placeholder="Enter Password" className="p-2 my-4 bg-gray-800 w-full" />
            <button className="p-4 my-4 rounded-2xl bg-red-700 w-full">{isSignIn ? "Sign In": "Sign Up"}</button>
            <p className="m-2 cursor-pointer" onClick={handleToggel}>{isSignIn ? "New to Netflix? Sign up now.": "Already have an account? Sign in now"}</p>
          </fieldset>
        </form>
      </div>
  )
}

export default Login;