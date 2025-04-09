import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NoRender() {

    // useEffect with 'userId' as a dependency
    useEffect(() => {

        // Adding data
        // const newMovie = {name:"AA", "language": "english1", "bio": "Donec", "rating": 6.1}
        // axios.post('http://localhost:4000/movies', newMovie)
        // .then(response => {
        //     console.log(response);
        // })
        // .catch(error => {
        //     console.error(error);
        // });

        //fetching the data and get the data
        // axios.get('http://localhost:4000/movies')
        // .then(response => {
        //     console.log(response.data);
        // })
        // .catch(error => {
        //     console.error(error);
        // });

        //updating the data
        // const newMovie = {name:"A11A", "language": "english1", "bio": "Donec", "rating": 6.1}
        // axios.put('http://localhost:4000/movies/1', newMovie)
        // .then(response => {
        //     console.log(response.data);
        // })
        // .catch(error => {
        //     console.error(error);
        // });

        // updating partial data
        // const newMovie = {name:"1111AA"}
        // console.log("AAAA");
        // axios.patch('http://localhost:4000/movies/3', {bio:"1111AA"})
        // .then(response => {
        //     console.log(response.data);
        // })
        // .catch(error => {
        //     console.error(error);
        // });

        // deleting the single dada
        // axios.delete('http://localhost:4000/movies/06b0')
        // .then(response => {
        //     console.log('User deleted successfully');
        // })
        // .catch(error => {
        //     console.error(error);
        // });

        // deleting bulk single dada

        // const ids = ['5b0d', 7693];
        // const deleteBulk = async (ids) => {
        //     const deleteRequests = ids.map(id => axios.delete(`http://localhost:4000/movies/${id}`));
        //     // Use Promise.all to send all requests in parallel
        //     await Promise.all(deleteRequests);
           
        //     console.log('All users deleted successfully!');
        // }
        // deleteBulk(ids);
        // const a = ["axios.delete('http://localhost:4000/movies/5b0d')", "axios.delete('http://localhost:4000/movies/7693')"];
        // Promise.all(a);


    }, []);  // Re-run effect whenever 'userId' changes

    // const test = document.getElementById("Heee"); 
    // console.log(test);

    return (
        <div className='bg-white' id="Heee">
            <h1>User Profile JUst to check useEffect</h1>
            <div>
                {/* <button onClick={() => setUserId(userId + 1)}>Next User</button> */}
            </div>
            <div>
                {/* {userData ? (
                    <pre>{JSON.stringify(userData, null, 2)}</pre>
                ) : ( */}
                    <p>Loading user data...</p>
                {/* )} */}
            </div>
        </div>
    );
}

export default NoRender;
