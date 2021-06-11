import React, { useState, useEffect } from 'react';
import '../App.css';
import Card from '../components/Card'
import API from "../utils/API";

function Match() {

    // const [loggedUser, setLogged] = useState()

    // useEffect(() => {
    //     async function fetchData() {
    //         API.getMatch().then(response => {
    //             console.log(response.data)
    //             setLogged(response.data.user);
    //         });
    //     };
    //     fetchData()
    // }, []);

    //console.log(loggedUser)


    return (
        <div>
            <div className="bg-image w-full h-auto flex flex-wrap justify-center items-center py-5">
                <div className="backdrop h-screen bg-white bg-opacity-10 rounded p-3 text-black border border-gray-300 shadow-lg">
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Match