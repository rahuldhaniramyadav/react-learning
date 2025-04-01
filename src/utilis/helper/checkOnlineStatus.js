import { useEffect, useState } from "react";

const checkOnlineStatus = () =>  {

  const [checkStatus, setCheckOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      console.log("ONline");
      setCheckOnline(true);
    });

    window.addEventListener("offline", () => {
      console.log("Offline");
      setCheckOnline(false);
    });

  }, []);

  return checkStatus;

}

export default checkOnlineStatus;