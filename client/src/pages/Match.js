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
            <div className="w-full">
                <div className="relative h-screen bg-red-light mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24">
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Match