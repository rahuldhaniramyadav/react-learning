import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoRender from "./NoRender"; // checking whather the child coponent is re rdnersing or not

function UserProfileTest() {
    const [userId, setUserId] = useState(1); // Example state for user ID
    const [userData, setUserData] = useState(null);

    // useEffect with 'userId' as a dependency
    useEffect(() => {
        
      // Fetch user data from an API when 'userId' changes

      // const getUserdata = async () => {
      //     const data = await fetch('https://dummyjson.com/test');
      //     const json = await data.json();
      //     console.log(json);
      //     setUserData(json)
      //   }
      //   getUserdata();

        axios.get('https://dummyjson.com/test')
            .then(response => setUserData(response.data))
            .catch(error => console.log('Error fetching user data:', error));

    }, [userId]);  // Re-run effect whenever 'userId' changes

    return (
        <div className='bg-white'>
            <h1>User Profile JUst to check useEffect</h1>
            <div>
                <button onClick={() => setUserId(userId + 1)}>Next User</button>
            </div>
            <div>
                {userData ? (
                    <pre>{JSON.stringify(userData, null, 2)}</pre>
                ) : (
                    <p>Loading user data...</p>
                )}
                <NoRender />
            </div>
        </div>
    );
}

export default UserProfileTest;
